import { Component, OnInit } from '@angular/core';
import * as moment from 'moment';

@Component({
  selector: 'custom-ranges',
  templateUrl: './custom-ranges.component.html',
  styleUrls: ['./custom-ranges.component.scss']
})
export class CustomRangesComponent implements OnInit {
  selected: any;
  alwaysShowCalendars: boolean;
  showRangeLabelOnInput: boolean;
  keepCalendarOpeningWithRange: boolean;
  maxDate: moment.Moment;
  minDate: moment.Moment;
  invalidDates: moment.Moment[] = [moment().add(2, 'days'), moment().add(3, 'days'), moment().add(5, 'days')];
  ranges: any = {
    Last: {
        Day: [moment().subtract(1, 'days'), moment().subtract(1, 'days')],
        Week: [moment().subtract(1, 'weeks').startOf('isoWeek'), moment().subtract(1, 'weeks').endOf('isoWeek')],
        Fortnite: [moment().subtract(2, 'weeks').startOf('isoWeek'), moment().subtract(1, 'weeks').endOf('isoWeek')],
    },
    Current: {
        Day: [moment(), moment()],
        Week: [moment().startOf('isoWeek'), moment().endOf('isoWeek')],
        Fortnite: [moment().subtract(1, 'weeks').startOf('isoWeek'), moment().endOf('isoWeek')],
    },
    Next: {
        Day: [moment().add(1, 'days'), moment().add(1, 'days')],
        Week: [moment().add(1, 'weeks').startOf('isoWeek'), moment().add(1, 'weeks').endOf('isoWeek')],
        Fortnite: [moment().add(1, 'weeks').startOf('isoWeek'), moment().add(2, 'weeks').endOf('isoWeek')],
    }
  };

  isInvalidDate = (m: moment.Moment) =>  {
    return this.invalidDates.some(d => d.isSame(m, 'day') )
  }

  constructor() {
    this.maxDate = moment().add(2,  'weeks');
    this.minDate = moment().subtract(3, 'days');

    this.alwaysShowCalendars = true;
    this.keepCalendarOpeningWithRange = true;
    this.showRangeLabelOnInput = true;
    this.selected = {startDate: moment().subtract(1, 'days'), endDate: moment().subtract(1, 'days')};
  }
  rangeClicked(range) {
    console.log('[rangeClicked] range is : ', range);
  }
  datesUpdated(range) {
    console.log('[datesUpdated] range is : ', range);
  }

  ngOnInit() {}
}
