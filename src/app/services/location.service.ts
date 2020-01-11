import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { FestivalLocation } from '@app/helpers';

@Injectable()
export class LocationService {
  private locations$ = new BehaviorSubject<Array<FestivalLocation>>([]);

  constructor() {
    const locations = [];

    Object.keys(FestivalLocation).map(key => locations.push(FestivalLocation[key]));

    this.locations$.next(locations);
  }

  getLocations(): Array<FestivalLocation> {
    return this.locations$.getValue();
  }
}
