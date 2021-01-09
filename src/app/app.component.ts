import {Component, OnInit, TemplateRef} from '@angular/core';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import * as moment from 'moment';
import {FormBuilder, FormGroup} from '@angular/forms';
import {Moment} from 'moment';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  formGroup: FormGroup;
  dates: Moment[] = [];
  modalRef: BsModalRef;
  minD: any = '08/01/2021';
  channel = '';
  constructor(private modalService: BsModalService, private fb: FormBuilder) {}

  ngOnInit(): void {
    this.formBuilder();
  }

  openModal(template: TemplateRef<any>, channel: string): void {
    this.dates = [];
    this.modalRef = this.modalService.show(template);
    this.channel = channel;
    if (this.formGroup.get(this.channel).value)
    {
      this.dates = this.formGroup.get(this.channel).value.split(',')
        .map((date) => moment(date.split('/').reverse().join('-')).toISOString());
    }
  }

  formBuilder(): void {
    this.formGroup = this.fb.group({
      ktrk: [''],
      nts: [''],
      eltr: [''],
    });
  }

  done(): void {
    this.modalRef.hide();
  }

  onChangeCalendar(): void {
    this.formGroup.get(this.channel).setValue(this.dates.map(date => moment(date).format('DD/MM/YYYY')).toString());
  }
}
