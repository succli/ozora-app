import { Component, OnInit } from '@angular/core';
import { BandEvent } from '@app/helpers';
import { ScheduleService } from '@app/services';

@Component({
  selector: 'ozora-lineup',
  templateUrl: './lineup.component.html',
  styleUrls: ['./lineup.component.scss']
})
export class LineupComponent implements OnInit {
  lineup: Array<BandEvent>;

  constructor(private scheduleService: ScheduleService) {
  }

  ngOnInit(): void {
    this.lineup = this.scheduleService.getSchedule();
  }

  trackByFn(_: number, band: BandEvent): string {
    return band.name;
  }

  getImageUrlForStyle(logo: string): string {
    return logo ? `url(assets/img/bands/${logo})` : '';
  }
}
