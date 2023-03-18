import {Component} from '@angular/core';
import {MatDatepicker} from "@angular/material/datepicker";
import * as moment from 'moment';
import {FormControl} from "@angular/forms";
import {DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE} from "@angular/material/core";
import {MAT_MOMENT_DATE_ADAPTER_OPTIONS, MomentDateAdapter} from "@angular/material-moment-adapter";

export const MY_FORMATS = {
  parse: {
    dateInput: 'MM/YYYY',
  },
  display: {
    dateInput: 'MM/YYYY',
    monthYearLabel: 'MMM YYYY',
    dateA11yLabel: 'LL',
    monthYearA11yLabel: 'MMMM YYYY',
  },
};

@Component({
  selector: 'app-fixtures',
  templateUrl: './fixtures.component.html',
  styleUrls: ['./fixtures.component.scss'],
  providers: [
    {
      provide: DateAdapter,
      useClass: MomentDateAdapter,
      deps: [MAT_DATE_LOCALE, MAT_MOMENT_DATE_ADAPTER_OPTIONS],
    },

    {provide: MAT_DATE_FORMATS, useValue: MY_FORMATS},
  ]
})
export class FixturesComponent {
  chosenDate: FormControl;

  constructor() {
    this.chosenDate = new FormControl(moment());
  }

  setMonthAndYear<D>(normalizedMonthAndYear: moment.Moment, datepicker: MatDatepicker<D>) {
    const ctrlValue = this.chosenDate.value!;
    ctrlValue.month(normalizedMonthAndYear.month());
    ctrlValue.year(normalizedMonthAndYear.year());
    this.chosenDate.patchValue(ctrlValue);
    datepicker.close();
    console.log((this.chosenDate.value as moment.Moment).format('MM/YYYY'));
  }
}
