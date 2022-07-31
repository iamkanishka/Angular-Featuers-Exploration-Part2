import { HttpEvent, HttpEventType, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { tap } from 'rxjs/operators'


export class Logginginterceptor implements HttpInterceptor {

  intercept(req: HttpRequest<any>, next: HttpHandler) {
 
    console.log('Logging Custom Headers', req.headers)
    return next.handle(req).pipe(tap(event => {
      console.log(event);
      if (event.type === HttpEventType.Response) {
        console.log(event.body);

      }
    }))

  }

}

