import { Component, OnInit, ViewChild, ElementRef, OnDestroy } from '@angular/core';
import { interval, BehaviorSubject } from 'rxjs';
import { takeWhile } from 'rxjs/operators';

interface CTX extends CanvasRenderingContext2D {
  transformedPoint?: (x: number, y: number) => DOMPoint;
}

@Component({
  selector: 'ozora-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnInit, OnDestroy {
  @ViewChild('map', { static: true }) map: ElementRef<HTMLDivElement>;
  selectedLocation: string;
  private currentScale = 1;
  private zoomEnd$ = new BehaviorSubject<boolean>(false);
  private lastCoords: {x: number, y: number};
  private dragStart: {x: number, y: number};

  ngOnInit(): void {
    this.map.nativeElement.style.transform = 'scale(1) translate(0px, 0px)';
  }

  ngOnDestroy(): void {
    this.zoomEnd$.complete();
  }

  zoom(event: MouseEvent | TouchEvent, dir: number) {
    event.preventDefault();

    this.zoomEnd$.next(false);

    this.scale(dir);

    interval(100).pipe(
      takeWhile(() => !this.zoomEnd$.getValue())
    ).subscribe(() => this.scale(dir));
  }

  zoomEnd(event: MouseEvent | TouchEvent): void {
    event.preventDefault();
    this.zoomEnd$.next(true);
  }

  onDragStart(event: TouchEvent): void {
    this.selectedLocation = undefined;
    const target: Touch = event.targetTouches[0];

    this.lastCoords = {
      x: target.clientX,
      y: target.clientY
    };

    this.dragStart = {...this.lastCoords};
  }

  onDragMove(event: TouchEvent): void {
    const target: Touch = event.targetTouches[0];

    this.lastCoords = {
      x: target.clientX,
      y: target.clientY
    };

    if (this.dragStart) {
      this.map.nativeElement.style.transform = this.map.nativeElement.style.transform.replace(
        /translate\((-?\d+(\.\d+)?)px, (-?\d+(\.\d+)?)px\)/,
        `translate(${this.lastCoords.x - this.dragStart.x}px,${this.lastCoords.y - this.dragStart.y}px)`
      );
    }
  }

  onDragEnd(event: TouchEvent): void {
    this.dragStart = undefined;
  }

  openInfo(location: string): void {
    this.selectedLocation = location;
  }
  
  private scale(dir: number) {
    this.currentScale = this.currentScale + (dir * 0.1);
    if (this.currentScale < 1) {
      this.currentScale = 1;
      this.map.nativeElement.style.transform = 'scale(1) translate(0px, 0px)';
      return;
    }

    this.map.nativeElement.style.transform =
      this.map.nativeElement.style.transform.replace(/scale\((-?\d+(\.\d+)?)\)/, `scale(${this.currentScale})`);
  }
}
