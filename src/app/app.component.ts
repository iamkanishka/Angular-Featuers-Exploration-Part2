import { Component } from '@angular/core';
import { AuthserviceService } from './Services/authservice/authservice.service';
import { UserserviceService } from './Services/userservice.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angularroutingfeatures';
  userAdded:boolean=false
  constructor(private authserviceService:AuthserviceService,private userserviceService:UserserviceService ){
    this.userserviceService.userAddedEvent.subscribe((res:boolean)=>{
      this.userAdded=res
    })

  }
  // button functions to manage login state of user, login and logout 

  login(){
    this.authserviceService.login()
  }
  logout(){
    this.authserviceService.logout()
  }
}
