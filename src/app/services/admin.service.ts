import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse, HttpEvent} from '@angular/common/http';
import {catchError, map} from 'rxjs/operators';
import {Observable, Subject, throwError} from 'rxjs';
import { toFormData } from '../helper/toFormData';

@Injectable({
    providedIn: 'root'
  })
  export class AdminService {
    constructor(private http: HttpClient) { }

    setTv(tvPost: any): Observable<any> {
        return this.http.post(`http://localhost:5000/admin/SetTv`, toFormData(tvPost))
          .pipe(
            map((response: any) => {
              return response;
            }),
            catchError(this.handleError.bind(this))
          );
      }
    
      private handleError(error: HttpErrorResponse) {
        console.log(error);
        // switch (error.status) {
        //   case 200 : {this.error$.next(error.error.message); break; }
        //   case 401 : {this.error$.next('Вы не авторизованны'); break; }
        //   case 403 : {this.error$.next('У вас нету права доступа!'); break; }
        // }
        return throwError(error);
      }

  }