import {Component, TemplateRef} from '@angular/core';
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
  datess: string[] = ['2020-11-15T18:00:00.000Z', '2020-11-16T18:00:00.000Z'];
  modalRef: BsModalRef;
  constructor(private modalService: BsModalService) {}

  openModal(template: TemplateRef<any>): void {
    this.modalRef = this.modalService.show(template);
  }

  setClear(): void {
    this.val1 = '';
    this.val2 = '';
  }

  done(): void {
    this.modalRef.hide();
    console.log('test');
  }

  tfunc(): void {
    console.log(this.datess);
  }
}
