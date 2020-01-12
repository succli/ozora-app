import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

interface CTX extends CanvasRenderingContext2D {
  transformedPoint?: (x: number, y: number) => DOMPoint;
}

@Component({
  selector: 'ozora-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnInit {
  @ViewChild('canvas', { static: true }) canvas: ElementRef<HTMLCanvasElement>;
  private ctx: CTX;
  private map: HTMLImageElement;
  private scale = 0;
  private lastX: number;
  private lastY: number;
  private dragStart: DOMPoint;
  private dragged = false;
  private svg: SVGSVGElement;
  private xform: DOMMatrix;
  private savedTransforms: Array<DOMMatrix> = [];

  constructor() { }

  ngOnInit() {
    this.ctx = this.canvas.nativeElement.getContext('2d');
    this.ctx.canvas.width = 375;
    this.ctx.canvas.height = 742;
    this.map = new Image();
    this.map.onload = () => {
      this.ctx.drawImage(this.map, 0, 0);
    }
    this.map.src = 'http://localhost:4200/assets/img/map.svg';

    this.lastX = this.ctx.canvas.width / 2;
    this.lastY = this.ctx.canvas.height / 2;

    this.trackTransforms();
  }

  zoom(dir: number): void {
    this.scale += dir;
    if (this.scale < 0) {
      this.scale = 0;
      return;
    }

    const pt = this.ctx.transformedPoint(this.lastX, this.lastY);
    this.ctx.translate(pt.x, pt.y);
    const scale = Math.pow(1.1, dir);
    console.log(scale);
    this.ctx.scale(scale, scale);
    this.ctx.translate(-pt.x, -pt.y);
    this.redraw();
  }

  onTouchStart(event: TouchEvent): void {
    event.preventDefault();
    const target: Touch = event.targetTouches[0];

    this.lastCoordinates(target);
    this.dragStart = this.ctx.transformedPoint(this.lastX, this.lastY);
    console.log(this.dragStart);
    this.dragged = false;
  }

  onTouchEnd(event: TouchEvent): void {
    event.preventDefault();
    this.dragStart = null;
    this.dragged = false;
  }

  onTouchMove(event: TouchEvent): void {
    event.preventDefault();
    const target: Touch = event.targetTouches[0];

    this.lastCoordinates(target);
    this.dragged = true;

    if (this.dragStart) {
      const pt = this.ctx.transformedPoint(this.lastX, this.lastY);

      let moveX = pt.x - this.dragStart.x;
      let moveY = pt.y - this.dragStart.y;

      /*if (moveX < 0) {
        moveX = 0;
        console.log('moveX < 0');
      }

      if (moveY < 0) {
        moveY = 0;
        console.log('moveY < 0');
      }

      if (moveX > this.ctx.canvas.width) {
        moveX = 0;
        console.log('moveY > canvas.width');
      }

      if (moveY > this.ctx.canvas.height) {
        moveY = 0;
        console.log('moveY > canvas.height');
      }*/

      this.ctx.translate(moveX, moveY);
      console.log(moveX, moveY);
      this.redraw();
    }
  }

  private redraw(): void {
    const p1 = this.ctx.transformedPoint(0, 0);
    const p2 = this.ctx.transformedPoint(this.ctx.canvas.width, this.ctx.canvas.height);

    this.ctx.clearRect(p1.x, p1.y, p2.x - p1.x, p2.y - p1.y);

    this.ctx.save();
    this.ctx.setTransform(1, 0, 0, 1, 0, 0);
    this.ctx.clearRect(0, 0, this.ctx.canvas.width, this.ctx.canvas.height);
    this.ctx.restore();

    this.ctx.drawImage(this.map, 0, 0);
  }

  private lastCoordinates(target: Touch) {
    this.lastX = target.clientX - this.ctx.canvas.offsetLeft;
    this.lastY = target.clientY - this.ctx.canvas.offsetTop;
  }

  private trackTransforms(): void {
    this.svg = document.createElementNS("http://www.w3.org/2000/svg", 'svg');
    this.xform = this.svg.createSVGMatrix();

    this.ctx.getTransform = () => this.xform;

    const save = this.ctx.save;
    this.ctx.save = () => {
      this.savedTransforms.push(this.xform.translate(0, 0));
      return save.call(this.ctx);
    }

    const restore = this.ctx.restore;
    this.ctx.restore = () => {
      this.xform = this.savedTransforms.pop();
      return restore.call(this.ctx);
    }

    const scale = this.ctx.scale;
    this.ctx.scale = (sx: number, sy: number) => {
      this.xform = this.xform.scaleNonUniform(sx, sy);
      return scale.call(this.ctx, sx, sy);
    }

    const rotate = this.ctx.rotate;
    this.ctx.rotate = (radians: number) => {
      this.xform = this.xform.rotate(radians * 180 / Math.PI);
      return rotate.call(this.ctx, radians);
    }

    const translate = this.ctx.translate;
    this.ctx.translate = (dx: number, dy: number) => {
      this.xform = this.xform.translate(dx, dy);
      return translate.call(this.ctx, dx, dy);
    }

    const transform = this.ctx.transform;
    this.ctx.transform = (a, b, c, d, e, f) => {
      const m2 = this.svg.createSVGMatrix();
      m2.a = a;
      m2.b = b;
      m2.c = c;
      m2.d = d;
      m2.e = e;
      m2.f = f;

      this.xform = this.xform.multiply(m2);

      return transform.call(this.ctx, a, b, c, d, e, f);
    }

    const setTransform = this.ctx.setTransform;
    this.ctx.setTransform = ({a, b, c, d, e, f}) => {
      this.xform.a = a;
      this.xform.b = b;
      this.xform.c = c;
      this.xform.d = d;
      this.xform.e = e;
      this.xform.f = f;

      return setTransform.call(this.ctx, a, b, c, d, e, f);
    }

    const pt = this.svg.createSVGPoint();
    this.ctx.transformedPoint = (x: number, y: number) => {
      pt.x = x;
      pt.y = y;
      return pt.matrixTransform(this.xform.inverse());
    }
  }
}
