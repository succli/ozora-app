import { Component, OnInit } from '@angular/core';
import { LocationService, ScheduleService } from '@app/services';
import { FestivalLocation, BandEvent } from '@app/helpers';
import { BehaviorSubject } from 'rxjs';
import { head as _head } from 'lodash';

@Component({
  selector: 'ozora-schedule',
  templateUrl: './schedule.component.html',
  styleUrls: ['./schedule.component.scss']
})
export class ScheduleComponent implements OnInit {
  locations: Array<FestivalLocation> = [];
  festivalDays$ = new BehaviorSubject<Array<Date>>([]);
  selectedDay: Date;
  activeLocation = FestivalLocation.main;
  schedule$ = new BehaviorSubject<Array<BandEvent>>([]);

  get isOpeningCeremony(): boolean {
    const firstDay = new Date('2020-06-20');
    return this.selectedDay.toDateString() === firstDay.toDateString() &&
      this.activeLocation === FestivalLocation.main;
  }

  constructor(private locationService: LocationService,
              private scheduleService: ScheduleService) {}

  ngOnInit() {
    this.locations = this.locationService.getLocations();
    const festivalDays = {
      from: new Date('2020-06-20 00:00:00'),
      to: undefined
    };
    const lastDay: Date = this.scheduleService.getLastDay();
    festivalDays.to = festivalDays.from.toDateString() !== lastDay.toDateString() ? lastDay : undefined;

    this.festivalDays$.next(this.getFestivalDays(festivalDays));
    this.selectedDay = _head(this.festivalDays$.getValue());
    this.getSchedule();
  }

  loadLocationSchedule(location: FestivalLocation) {
    this.activeLocation = location;

    this.getSchedule();
  }

  dayChanged(date: Date) {
    this.selectedDay = new Date(date);
    this.getSchedule(date);
  }

  private getSchedule(date?: Date): void {
    const selectedDay = new Date(date || this.selectedDay);
    const schedule = this.scheduleService.filterSchedule(selectedDay, this.activeLocation);
    this.schedule$.next(schedule);
  }

  private getFestivalDays({ from, to }: { from: Date, to: Date }): Array<Date> {
    return !to ? [from] : this.getDateRange(from, to);
  }

  private getDateRange(start: Date, end: Date): Array<Date> {
    const dates = [];
    const date = new Date(start);

    dates.push(new Date(date));

    const diff = Math.abs(start.getTime() - end.getTime());
    const diffDays = Math.ceil(diff / (1000 * 3600 * 24));

    for (let i = 1; i <= diffDays; i++) {
      const newDate = new Date(date);
      newDate.setDate(newDate.getDate() + i);
      dates.push(newDate);
    }

    return dates;
  }
}
