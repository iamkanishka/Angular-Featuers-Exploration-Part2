import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthinterceptorService } from '../Services/authinterceptor/authinterceptor.service';
import { Logginginterceptor } from '../Services/logginginterceptor/logginginterceptor.service';
import { AuthTokenInterceptorService } from '../Services/auth-token-interceptor/auth-token-interceptor.service';



@NgModule({
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: AuthinterceptorService, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: Logginginterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: AuthTokenInterceptorService, multi: true }

  ],
  imports: [
    CommonModule
  ]
})
export class CoreModule { }
