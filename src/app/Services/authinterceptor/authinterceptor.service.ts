import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';


export class AuthinterceptorService implements HttpInterceptor {
     intercept(req: HttpRequest<any>, next: HttpHandler){
      let modofiedRequest = req.clone({
        headers:req.headers.append('auth','abc'),
       //You can overide/change the URL
       // url:"asdbjsd"

       params:req.params.append('hai','hello world')
      })
      console.log('Sending Request interceptor')
       //default request  
      // return next.handle(req)

      //modified Request
         return next.handle(modofiedRequest)

     }
}
