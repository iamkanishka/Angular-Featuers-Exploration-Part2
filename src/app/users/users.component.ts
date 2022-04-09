import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserserviceService } from '../Services/userservice.service';


@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

  constructor(private router:Router,private userserviceService:UserserviceService) {

  }
  ngOnInit(): void {
  }

  gotoCategories(){
    this.router.navigate(['/category'])
  }
  gotousers(){
    this.router.navigate(['/'])
  }

  onUserAddedClick(){

    this.userserviceService.addUser()

  }
 
}
