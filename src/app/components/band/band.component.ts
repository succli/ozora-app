import { Component, OnInit } from '@angular/core';
import { BandEvent, LINEUP, BaseComponent } from '@app/helpers';
import { ActivatedRoute } from '@angular/router';
import { takeUntil } from 'rxjs/operators';
import { BehaviorSubject } from 'rxjs';
import { ScheduleService } from '@app/services';

@Component({
  selector: 'ozora-band',
  templateUrl: './band.component.html',
  styleUrls: ['./band.component.scss']
})
export class BandComponent extends BaseComponent implements OnInit {
  band$ = new BehaviorSubject<BandEvent>(undefined);

  constructor(private route: ActivatedRoute,
              private scheduleService: ScheduleService) {
    super();
  }

  ngOnInit() {
    this.route.params
      .pipe(takeUntil(this.destroy$))
      .subscribe(params => {
        this.band$.next(this.scheduleService.getBandEvent(+params.id));
      });
  }
}
