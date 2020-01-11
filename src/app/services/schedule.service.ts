import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { BandEvent, LINEUP, DATES } from '@app/helpers';
import { last as _last } from 'lodash';

@Injectable()
export class ScheduleService {
  private schedule$ = new BehaviorSubject<Array<BandEvent>>([]);

  constructor() {
    const length = LINEUP.length > DATES.length ? DATES.length : LINEUP.length;

    const lineup: Array<BandEvent> = LINEUP
      .map(a => ({sort: Math.random(), value: a}))
      .sort((a, b) => a.sort - b.sort)
      .map(a => a.value);

    for (let i = 0; i < length; i ++) {
      lineup[i].datetime = DATES[i];
    }

    this.schedule$.next(lineup);
  }

  getSchedule(): Array<BandEvent> {
    return this.schedule$.getValue();
  }

  getBandEvent(id: number): BandEvent {
    return this.getSchedule().find(band => band.id === id);
  }

  getLastDay(): Date {
    const bandEvent: BandEvent = _last(this.getSchedule());
    const datetime = new Date(bandEvent.datetime);
    datetime.setHours(0, 0, 0, 0);
    return datetime;
  }

  getScheduleByDay(date: Date) {
    return this.schedule$.getValue().filter((band: BandEvent) =>
      band.datetime.toDateString() === date.toDateString());
  }
}
