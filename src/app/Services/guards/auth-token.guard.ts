import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { map, tap,take } from 'rxjs/operators';
import { AuthserviceService } from '../authservice/authservice.service';

@Injectable({
  providedIn: 'root'
})
export class AuthTokenGuard implements CanActivate {
  constructor(private authserviceService: AuthserviceService, private router: Router) {

  }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    //   return this.authserviceService.userSub.pipe(map(user => {
    //     return user ? true : false
    //   }), tap(auth => {
    //     if (!auth) {
    //       this.router.navigateByUrl('/auth')
    //     }
    //   }))
    // }


    // returning the UrlTree
    return this.authserviceService.userSub.pipe(take(1),map(user => {
      if (!user) {
        return this.router.createUrlTree(['/auth'])
      }
      return true
    }))
    }


}
