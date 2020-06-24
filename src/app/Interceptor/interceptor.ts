import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { LoaderServiceService } from '../loader-service.service';
import { catchError, finalize } from 'rxjs/operators';
import { ToastrService } from 'ngx-toastr';
@Injectable()
export class TokenInterceptor implements HttpInterceptor {
  constructor(private _service:LoaderServiceService,private toaster:ToastrService) {}
  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    this._service.show();
    var token=localStorage.getItem('token');
    request = request.clone({
      setHeaders: {
        Authorization: `Bearer ${token}`
      }
    });
    return next.handle(request).pipe(
        catchError(error => {
            console.log('error occured:', error);
            this.toaster.error('Error Occured.');
            throw error;
          }),
        finalize(() => this._service.hide()))
        
  }
}