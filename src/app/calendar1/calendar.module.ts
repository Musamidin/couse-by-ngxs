import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CalendarComponent } from './calendar.component';
import {DpDatePickerModule} from 'ng2-date-picker';
import {FormsModule} from '@angular/forms';



@NgModule({
  declarations: [CalendarComponent],
  imports: [
    CommonModule,
    DpDatePickerModule,
    FormsModule
  ],
  exports: [CalendarComponent]
})
export class CalendarModule { }
