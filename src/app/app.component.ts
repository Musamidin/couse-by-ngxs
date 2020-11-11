import {Component, TemplateRef} from '@angular/core';
import { SimpleCalendarComponent, HeatMapModel, ColorMapModel } from './simple-calendar/simple-calendar.component';
import { SimpleDate } from 'src/app/simple-calendar/simple-calendar.component';
import { Barcode, BarcodePicker, ScanSettings, configure } from 'scandit-sdk-angular';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  displayModal: boolean;
  val1: string;
  val2: string;
  modalRef: BsModalRef;
  constructor(private modalService: BsModalService) {}

  openModal(template: TemplateRef<any>): void {
    this.modalRef = this.modalService.show(template);
  }

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

  public showModalDialog(): void {
    this.displayModal = true;
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
    this.val1 = $event[0].data;
  }

  onError($event: Error): any {
    console.log($event);
  }

  setClear(): void {
    this.val1 = '';
    this.val2 = '';
  }
}
