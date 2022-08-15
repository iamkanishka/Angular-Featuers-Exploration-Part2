import { Component, OnDestroy } from '@angular/core';
import { Subject, Subscription } from 'rxjs';
import { AuthserviceService } from './Services/authservice/authservice.service';
import { UserserviceService } from './Services/userservice.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnDestroy {
  title = 'angularFeaturesExplore';
  userAdded:boolean=false

  userAddedSubscription!:Subscription

  constructor(private authserviceService:AuthserviceService,private userserviceService:UserserviceService ){
   // Getting Data from the EventEmitter
    // this.userserviceService.userAddedEvent.subscribe((res:boolean)=>{
    //   this.userAdded=res
    // })

   //Getting Data from the Subjects with subscription - 
// this.userAddedSubscription= this.userserviceService.userAddedEvent.subscribe(res=>{
//     this.userAdded=res
//   })


this.authserviceService.autoLogin()

  }
  // button functions to manage login state of user, login and logout 

  login(){
    this.authserviceService.login('','')
  }
  logout(){
    this.authserviceService.logout()
  }
  ngOnDestroy(): void {
    this.userAddedSubscription.unsubscribe()  
  }
}
