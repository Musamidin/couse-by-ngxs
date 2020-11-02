import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

import { SimpleCalendarComponent } from './simple-calendar.component';


@NgModule({
  declarations: [
    SimpleCalendarComponent
  ],
  imports: [
    CommonModule,
    MatButtonModule,
    MatIconModule
  ],
  exports: [
    SimpleCalendarComponent,
  ]
})
export class SimpleCalendarModule {

  /* Gets today's date */
  public static getToday(): any {
    return SimpleCalendarComponent.getToday();
  }

  /** Pad number with zeros */
  public static zeroPad(num: number, padlen: number, padchar = '0'): string {
    return SimpleCalendarComponent.zeropad(num, padlen, padchar);
  }
}
