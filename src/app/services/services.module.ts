import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ScheduleService } from './schedule.service';
import { LocationService } from './location.service';


@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  providers: [
    ScheduleService,
    LocationService
  ]
})
export class ServicesModule { }
