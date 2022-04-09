import { Injectable } from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { Observable, of } from 'rxjs';
import { UserserviceService } from '../userservice.service';

interface User{
  id:string;
  name:string;
}



@Injectable({
  providedIn: 'root'
})
export class UserresolversResolver implements Resolve<User> {


  constructor(private userserviceService:UserserviceService){
    
  }
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<User> | Promise<User>  {
   let id = route.params['id'];
   let details = this.userserviceService.getuser(id)
   return  of(details)
  }
}
