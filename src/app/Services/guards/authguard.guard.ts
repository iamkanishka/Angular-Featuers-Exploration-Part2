import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanActivateChild, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthserviceService } from '../authservice/authservice.service';

@Injectable({
  providedIn: 'root'
})
//Note: - canActivate:[AuthguardGuard] will guard Parent-Chilren Components 
//Note: - canActivateChild:[AuthguardGuard] will guard Parent's Childrens Components 
export class AuthguardGuard implements CanActivate, CanActivateChild {
  constructor(private authserviceService: AuthserviceService, private router: Router) {

  }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
   
      //Without Promise authentication state
      // let isLoggedIn = this.authserviceService.isAuthenticated()
    // if (isLoggedIn) {
    //   return true
    // } else {
    //   this.router.navigate(['/']);
    //   return false
    // }


       //   With Promise authentication state
    return this.authserviceService.isAuthenticated().then((data)=>{
        if (data) {
          return true
        } else {
          this.router.navigate(['/']);
          return false
        }
      })
  




  }


  canActivateChild(childRoute: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
  
  
  //   Without Promise authentication state
    // let isLoggedIn = this.authserviceService.isAuthenticated()
    // if (isLoggedIn) {
    //   return true
    // } else {
    //   this.router.navigate(['/']);
    //   return false
    // }


       //   With Promise authentication state
       return this.authserviceService.isAuthenticated().then((data)=>{
        if (data) {
          return true
        } else {
          this.router.navigate(['/']);
          return false
        }
      })
  


  }


}
