import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'ozora-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnInit {
  @ViewChild('canvas', { static: true }) canvas: ElementRef<HTMLCanvasElement>;
  private ctx: CanvasRenderingContext2D;
  private map: HTMLImageElement;

  constructor() { }

  ngOnInit() {
    this.ctx = this.canvas.nativeElement.getContext('2d');
    this.map = new Image();
    this.map.onload = () => {
      this.ctx.drawImage(this.map, 0, 0);
    }
    this.map.src = 'http://localhost:4200/assets/img/map.svg';
  }

}
