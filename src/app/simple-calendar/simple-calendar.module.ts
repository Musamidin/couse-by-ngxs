import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// @ts-ignore
import { Button  } from '@material-ui/core/Button';
import Icon from '@material-ui/core/Icon';
import { SimpleCalendarComponent } from './simple-calendar.component';


@NgModule({
  declarations: [
    SimpleCalendarComponent
  ],
  imports: [
    CommonModule,
    Button,
    Icon
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
