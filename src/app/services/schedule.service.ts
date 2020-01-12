import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { BandEvent, LINEUP, DATES, FestivalLocation } from '@app/helpers';
import { last as _last } from 'lodash';

@Injectable()
export class ScheduleService {
  private schedule$ = new BehaviorSubject<Array<BandEvent>>([]);

  constructor() {
    const length = LINEUP.length > DATES.length ? DATES.length : LINEUP.length;

    let lineup: Array<BandEvent> = [];

    for(let location in FestivalLocation) {
      const l: any = LINEUP
        .map(a => ({sort: Math.random(), value: a}))
        .sort((a, b) => a.sort - b.sort)
        .map(a => a.value)
        .map(a => {
          return {...a, location: FestivalLocation[location] }
        });
  
      for (let i = 0; i < length; i ++) {
        l[i].datetime = DATES[i];
      }

      lineup = lineup.concat(l);
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

  filterSchedule(date: Date, location: FestivalLocation) {
    return this.schedule$.getValue().filter((band: BandEvent) =>
      band.datetime.toDateString() === date.toDateString() && band.location == location);
  }
}
