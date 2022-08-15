import { HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { exhaustMap , take} from 'rxjs/operators';
import { AuthserviceService } from '../authservice/authservice.service';

@Injectable({
  providedIn: 'root'
})
export class AuthTokenInterceptorService implements HttpInterceptor {
  constructor(private authService: AuthserviceService) {}
  intercept(req: HttpRequest<any>, next: HttpHandler) {
   return  this.authService.userSub.pipe(take(1), exhaustMap(user=>{
    if(!user){
      return next.handle(req)
    }
    let modifiedRequest = req.clone({
      params:req.params.append('auth',user._token)
    })
    return next.handle(modifiedRequest)
    }))
  }



}
