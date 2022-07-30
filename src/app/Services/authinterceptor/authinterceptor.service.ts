import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';


export class AuthinterceptorService implements HttpInterceptor {
     intercept(req: HttpRequest<any>, next: HttpHandler){
      console.log('Sending Request interceptor')
         return next.handle(req)
     }
}
