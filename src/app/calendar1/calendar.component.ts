import {AfterViewInit, Component, forwardRef, Input, OnInit, ViewChild} from '@angular/core';
import {DayCalendarComponent, ECalendarMode, IDay, IDayCalendarConfig, IMonth, MonthCalendarComponent} from 'ng2-date-picker';
import * as moment from 'moment';
import {ControlValueAccessor, NG_VALUE_ACCESSOR} from '@angular/forms';
import {Moment} from 'moment';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => CalendarComponent),
      multi: true
    },
  ]
})
export class CalendarComponent implements OnInit, AfterViewInit, ControlValueAccessor {

  dates: Moment[] = [];
  config: IDayCalendarConfig = {
    min: '13/11/2020',
    locale: 'ru',
    allowMultiSelect: true,
    monthFormat: 'MMMM, YYYY',
    yearFormat: 'YYYY',
    numOfMonthRows: 4,
    firstDayOfWeek: 'mo'
  };
  initCalendar = false;
  displayedWeekCheckbox: { [key: number]: boolean } = {};
  disabledChBx: { [key: number]: boolean } = {};
  currentMonthClicked = false;

  @ViewChild(DayCalendarComponent) calendarComponent: DayCalendarComponent;
  @ViewChild(MonthCalendarComponent) monthCalendarComponent: MonthCalendarComponent;

  @Input() set minDate(value: string) {
    this.config = {...this.config, min: value};
  }

  @Input() set maxDate(value: string) {
    this.config = {...this.config, max: value};
  }

  constructor() {
  }

  ngOnInit(): void {
  }

  get weeks(): any {
    return this.calendarComponent.weeks;
  }

  get currentCalendarMode(): ECalendarMode {
    return this.calendarComponent.currentCalendarMode;
  }

  get calendarModes(): any {
    return this.calendarComponent.CalendarMode;
  }

  get navLabel(): string {
    return this.calendarComponent.navLabel;
  }

  get monthNavLabel(): string {
    return this.monthCalendarComponent.navLabel;
  }

  get months(): any {
    return this.monthCalendarComponent.yearMonths;
  }

  get showLeftNav(): boolean {
    return this.calendarComponent.showLeftNav;
  }

  get showRightNav(): boolean {
    return this.calendarComponent.showRightNav;
  }

  get _currentDateView(): any {
    if (this.calendarComponent) {
      return this.calendarComponent._currentDateView;
    }
    return null;
  }

  get _selected(): any {
    if (this.calendarComponent) {
      return this.calendarComponent._selected;
    }
    return null;
  }

  dayClicked(day: IDay, groupSelect = false): void  {
    if (!day.disabled && !day.nextMonth && !day.prevMonth) {
      this.calendarComponent.dayClicked(day);
    }
    if (day.prevMonth && !groupSelect) {
      this.onLeftNavClick();
    } else if (day.nextMonth && !groupSelect) {
      this.onRightNavClick();
    }

  }

  weekClicked(state: boolean, days: IDay[], index: number): void {
    if (days.some(day => !day.disabled)) {
      this.displayedWeekCheckbox[index] = state;
      if (state) {
        days.forEach(day => {
          if (!day.selected) {
            this.dayClicked(day, true);
          }
        });
      } else {
        days.forEach(day => {
          if (day.selected) {
            this.dayClicked(day, true);
          }
        });
      }
    }
  }

  monthClicked(state: boolean): void {
    this.currentMonthClicked = state;
    this.weeks.forEach((week, index) => this.weekClicked(state, week, index));
  }

  toggleCalendarMode(mode: ECalendarMode): void {
    this.calendarComponent.toggleCalendarMode(mode);
  }

  monthSelected(month: IMonth): void {
    this.calendarComponent.monthSelected(month);
    this.updateWeekCheckboxes();
  }

  onLeftNavClick(): void {
    this.calendarComponent.onLeftNavClick();
    this.updateWeekCheckboxes();
  }

  onRightNavClick(): void {
    this.calendarComponent.onRightNavClick();
    this.updateWeekCheckboxes();
  }

  updateWeekCheckboxes(): void {
    this.currentMonthClicked = false;
    this.displayedWeekCheckbox = {};
    this.calendarComponent.weeks.forEach((week, index) => {
      this.displayedWeekCheckbox[index] = week.some(day => day.selected);
    });
  }

  ngAfterViewInit(): void {
    this.initCalendar = true;
    this.updateWeekCheckboxes();
  }

  propagateChange = (dates: string[]) => {
  }

  registerOnChange(fn: any): void {
    this.propagateChange = fn;
  }

  registerOnTouched(fn: any): void {
  }

  setDisabledState(isDisabled: boolean): void {
  }

  writeValue(dates: string[]): void {
    if (dates && dates.length) {
      this.dates = dates.map(date => moment(date));
    } else {
      this.dates = [];
    }
  }

  modelChange(): void {
    this.propagateChange(this.dates.map((date) => moment(date).toISOString()));
  }
}
