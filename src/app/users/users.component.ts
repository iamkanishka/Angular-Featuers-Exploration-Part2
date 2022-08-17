import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DummyService } from '../dummy/dummy.service';
import { UserserviceService } from '../Services/userservice.service';


@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

  usersData = ['Rama', 'Krishna', 'Leela']

  constructor(private router:Router,private userserviceService:UserserviceService, private dummyService:DummyService) {
    this.dummyService.printLogMessage('Hi From kanihska from usersModule')

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
