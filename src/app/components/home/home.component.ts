import { Component, OnInit, OnDestroy } from '@angular/core';
import * as moment from 'moment';
import { BehaviorSubject, timer, Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'ozora-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, OnDestroy {
  days$: BehaviorSubject<number> = new BehaviorSubject<number>(0);
  private startDay = moment([2020, 6, 20]);
  private destroy$ = new Subject<void>();

  ngOnInit() {
    this.days$.next(this.startDay.diff(moment(), 'days'));

    timer(86400).pipe(
      takeUntil(this.destroy$)
    ).subscribe(() => {
      this.days$.next(this.startDay.diff(moment(), 'days'));
    });
  }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }

}
