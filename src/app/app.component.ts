import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd, ActivatedRoute, RoutesRecognized, ActivationEnd } from '@angular/router';
import { BaseComponent } from '@app/helpers';
import { filter, takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';
import { Location } from '@angular/common';

@Component({
  selector: 'ozora-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent extends BaseComponent implements OnInit {
  isLandingPage$ = new Subject<boolean>();
  showBackBtn$ = new Subject<boolean>();
  isMapPage$ = new Subject<boolean>();
  logoColor = '';
  btnColor = '';
  private colors: string[] = ['green', 'blue', 'pink'];

  constructor(private router: Router,
              private location: Location) {
    super();
  }

  ngOnInit(): void {
    this.router.events
      .pipe(
        filter(event => event instanceof NavigationEnd),
        takeUntil(this.destroy$)
      )
      .subscribe((event: NavigationEnd) => {
        this.isLandingPage$.next(event.url === '/');
        this.showBackBtn$.next(!(event.url === '/' || event.url === '/navigation'));
        this.isMapPage$.next(event.url === '/map');
      });

    this.logoColor = this.colors[Math.floor(Math.random() * 3)];
    const btnColors = this.colors.filter(color => color !== this.logoColor);
    this.btnColor = btnColors[Math.floor(Math.random() * 2)];
  }

  back(): void {
    this.location.back();
  }
}
