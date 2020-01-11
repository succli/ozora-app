import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ozora-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
  navigation: any = [
    {
      routerLink: 'lineup',
      label: 'line up'
    },
    {
      routerLink: 'schedule',
      label: 'schedule'
    },
    {
      routerLink: 'info',
      label: 'info'
    },
    {
      link: 'https://ozorafestival.eu/buy-a-ticket/ticket-info/',
      label: 'tickets'
    },
    {
      link: 'https://www.instagram.com/ozora_festival/',
      label: 'social'
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}
