import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {
  HomeComponent,
  MainComponent,
  LineupComponent,
  BandComponent,
  InfoComponent,
  ScheduleComponent
} from '@app/components';


const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'navigation',
    component: MainComponent
  },
  {
    path: 'lineup',
    component: LineupComponent
  },
  {
    path: 'band/:id',
    component: BandComponent
  },
  {
    path: 'info',
    component: InfoComponent
  },
  {
    path: 'schedule',
    component: ScheduleComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
