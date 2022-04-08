import { Component } from '@angular/core';
import { AuthserviceService } from './Services/authservice/authservice.service';
AuthserviceService

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angularroutingfeatures';
  constructor(private authserviceService:AuthserviceService ){
    

  }
  // button functions to manage login state of user, login and logout 

  login(){
    this.authserviceService.login()
  }
  logout(){
    this.authserviceService.logout()
  }
}
