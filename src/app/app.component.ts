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
  val2: number;
  datess: string[] = [];
  modalRef: BsModalRef;
  minD: any = '14/11/2020';
  constructor(private modalService: BsModalService) {}

  openModal(template: TemplateRef<any>): void {
    this.modalRef = this.modalService.show(template);
  }

  setClear(): void {
    this.val1 = '';
    this.val2 = 0;
  }

  done(): void {
    this.modalRef.hide();
    console.log(this.val2);
  }

  onChangeCalendar(): void {
    this.val1 = this.datess.map(date => moment(date).format('DD/MM/YYYY')).toString();
    this.val2 = this.datess.length;
  }
}
