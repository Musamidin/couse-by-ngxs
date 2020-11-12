import {Component, TemplateRef} from '@angular/core';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import * as moment from 'moment';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  displayModal: boolean;
  val1: string;
  val2: string;
  val3: number;
  tv: number;
  dates: string[] = [];
  allDates: string[] = [];
  modalRef: BsModalRef;
  minD: any = '14/11/2020';
  constructor(private modalService: BsModalService) {}

  openModal(template: TemplateRef<any>, tvp: number): void {
    this.modalRef = this.modalService.show(template);
    console.log(tvp);
    this.tv = tvp;
    this.allDates = [];
  }

  setClear(): void {
    this.val1 = '';
    this.val2 = '';
  }

  done(): void {
    this.modalRef.hide();
  }

  onChangeCalendar(): void {
    switch (this.tv) {
      case 1 : { this.val1 = this.allDates.map(date => moment(date).format('DD/MM/YYYY')).toString(); this.val3 = this.allDates.length; } break;
      case 2: { this.val2 = this.allDates.map(date => moment(date).format('DD/MM/YYYY')).toString(); this.val3 = this.allDates.length; } break;
    }
  }
}
