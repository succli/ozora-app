import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { MainComponent } from './main/main.component';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { LineupComponent } from './lineup/lineup.component';
import { NgScrollbarModule } from 'ngx-scrollbar';
import { BandComponent } from './band/band.component';
import { InfoComponent } from './info/info.component';
import { ScheduleComponent } from './schedule/schedule.component';
import { ServicesModule } from '@app/services';
import { MapComponent } from './map/map.component';

@NgModule({
  declarations: [
    HomeComponent,
    MainComponent,
    LineupComponent,
    BandComponent,
    InfoComponent,
    ScheduleComponent,
    MapComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    NgScrollbarModule,
    ServicesModule,
    FormsModule
  ]
})
export class ComponentsModule { }
