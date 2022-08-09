import { Component, OnInit } from '@angular/core';
import { AuthserviceService } from '../Services/authservice/authservice.service';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {
  isAuthenticated:boolean=false


  constructor(private authServive:AuthserviceService) {
    this.authServive.userSub.subscribe((user)=>{
      console.log(user);
      this.isAuthenticated = user ? true :false
      })
   }

  ngOnInit(): void {
  }

}
