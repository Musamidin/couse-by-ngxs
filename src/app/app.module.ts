import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {FormsModule} from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {DialogModule} from 'primeng/dialog';
import {ButtonModule} from 'primeng/button';
import { SimpleCalendarModule } from './simple-calendar/simple-calendar.module';
import { CalendarModule } from './calendar/calendar.module';
import { ScanditSdkModule } from 'scandit-sdk-angular';
import { ModalModule } from 'ngx-bootstrap/modal';

const licenseKey = 'Adlf1iHJPmS9Kx1zuBPjtp0f/YOcRKyxDWlqipsEn/vaR+JaN24dM+lcbA7DYUD9UHGs91tUpfMFbfoxtXwiejJfxMjVdVmlUlJsneRE23hcVk4lxBf08UUKhV50QwQq9hlLYp532WGsdKWeK/LFtUzo1q6Mbm8Fq+33bA4jR2kiU4MqmiAg+OZvmy7sSyLMOWl64XxERSAG6LtKIg/UxQtgBhRxc+VD4KiylJVThq2KYx+HcjuL0QAp7v5UfqPvyb1UP0zaa+LHyF24JS0U8CzQouXSPpnV0J/42hlrmvNnH4mVIoDws7ZrfDQ//WOAGqly67UGxsYIyQBXBYUY2GFQCc23yMCV9XaQ1cXKzaM1xAdn6o0iaN8qyD7aJvf4WJZk3VGYq47Vh+TYAVIhYCnMZTT1rfzit0miAjb/uXLjepHpI+HXVHY7TvT7bCSBzgd+nG6rv/TuXxHd4x81Kian2KxjxI3x4JY2X2wOFuGXc9ahsvWIBQOz0pkmDFJE8iOJWU2VVi4W5yos4IIsdkYpc6oCPrDI8NmcCNRW+n15tY5Lrb7+OslIbowpUWYYHnkf5Pd1YhNOhOC2U+noIlXLH2dI+PnMNxr+ttLXo3qvvo46uNNZojzYZYcBgrkVUnxJNBxXxiFI0xfKqJljcS8NOpFwNKlF/HvzA+f4tQJAxNw6EmQ3aaSnImna4mJoOtl038Qq5RVfiuogFC3JlFcuaTXRAEk7qN80iHeQPEpIu7IAIK9wqGCi3VHinwdSRdVjqZRZrfwxtZqD7KUB828fd6q0ZJDLda1QnXlQNAbxyw==';
const engineLocation = 'assets/';
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    ScanditSdkModule.forRoot(licenseKey, { engineLocation, preloadEngine: true, preloadBlurryRecognition: true }),
    BrowserAnimationsModule,
    AppRoutingModule,
    CalendarModule,
    DialogModule,
    ButtonModule,
    SimpleCalendarModule,
    FormsModule,
    ModalModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
