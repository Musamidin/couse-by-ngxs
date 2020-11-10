import { Component } from '@angular/core';
import { SimpleCalendarComponent, HeatMapModel, ColorMapModel } from './simple-calendar/simple-calendar.component';
import { SimpleDate } from 'src/app/simple-calendar/simple-calendar.component';
import { Barcode, BarcodePicker, ScanSettings, configure } from 'scandit-sdk-angular';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  val: string;
  public settings = new ScanSettings({ enabledSymbologies: [
      Barcode.Symbology.EAN8,
      Barcode.Symbology.EAN13,
      Barcode.Symbology.UPCA,
      Barcode.Symbology.UPCE,
      Barcode.Symbology.CODE128,
      Barcode.Symbology.CODE39,
      Barcode.Symbology.CODE93,
      Barcode.Symbology.INTERLEAVED_2_OF_5,
    ] });

  public selDate: SimpleDate = { date: 1, month: 1, year: 1 };
  heatmap: HeatMapModel;
  highlightToday: boolean;
  colorMap: ColorMapModel;
  zeropad: (num: any, padlen: any, padchar?: string) => string;
  today: Date;
  constructor() { //public brpk: BarcodePicker
    this.selDate = SimpleCalendarComponent.getToday();
    this.zeropad = SimpleCalendarComponent.zeropad;
    this.today = new Date();
    let year, month, date;
    year = `${this.today.getFullYear()}`;
    month = this.zeropad(`${this.today.getMonth() + 1}`, 2);
    date = `${this.today.getDate()+3}`;
    this.heatmap={};
    this.heatmap[Number(year + this.zeropad(month, 2) + this.zeropad(date, 2))] = {
      color: 'green',
      opacity: 1
    };
    this.colorMap = {
      heatMapColor: '#00ff00',
      primaryColor: '#ff0000',
      primaryForeground: 'black',
      backgroundColor: 'gainsboro',
      previousDateColor: '#989696'//'#74C2D1'
    };
    this.highlightToday = true;
    //this.brpk.pauseScanning(true);
  }

  /** Log changes in date */
  dateChanged(date: SimpleDate) {
    console.log(date);
  }
  /** Log changes in month */
  monthChanged(date: SimpleDate) {
    console.log(date);
  }


  title = 'test';
  date14: Date;
  dates: any[];

  displayModal: boolean;

  public showModalDialog(): void {
    this.displayModal = true;
    //this.brpk.resumeScanning();
  }

  public test($event): void {
    console.log(this.dates);
    console.log(this.formatDate($event));
    //console.log(this.date14);
  }

  public checker(): void {
    this.displayModal = false;
  }

  formatDate(date): any {
    let month = date.getMonth() + 1;
    let day = date.getDate();

    if (month < 10) {
      month = '0' + month;
    }

    if (day < 10) {
      day = '0' + day;
    }
    return day + '/' + '/' + month + '/' + date.getFullYear();
  }

  onScan($event: any): any {
    console.log($event[0].data);
    this.val = $event[0].data;
  }

  onError($event: Error): any {
    console.log($event);
  }

  setClear(): void {
    this.val = '';
  }
}
