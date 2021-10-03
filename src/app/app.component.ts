import {Component, OnInit, TemplateRef} from '@angular/core';
//import {FormBuilder, FormGroup, Validators} from '@angular/forms';
//import { AdminService } from './services/admin.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  //tvFormGroup: FormGroup;
  //img: File = null;
  constructor() {} //private fb: FormBuilder, private adminService: AdminService

  ngOnInit(): void {
    //this.initForm();
  }

  // initForm(): void {
  //   this.tvFormGroup = this.fb.group({
  //     id: [0],
  //     tvname: [null, Validators.required],
  //     controlId: ['piramida'],
  //     salesPrice: [null, Validators.required],
  //     buyPrice: [null, Validators.required],
  //     reportPrice: [0],
  //     discount: [null],
  //     isReport: [true],
  //     info: [null],
  //     deadLine: [null, Validators.required],
  //     img: [null, Validators.required],
  //     sysDateTime: [null],
  //     status: [0]
  //   });
  // }

  // handleChanges(event: any): void {
  //   if (event.target.files.length > 0)
  //   {
  //     this.img = event.target.files[0];
  //   }
  // }

  // save(): void {
  //   this.tvFormGroup.get('img').setValue(this.img);
  //   console.log(this.tvFormGroup.value);
  //   this.adminService.setTv(this.tvFormGroup.value).subscribe(resp => {
  //     console.log(resp);
  //   });
  // }
}
