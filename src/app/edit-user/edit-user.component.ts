import { Component, OnInit } from '@angular/core';
import { IDeactivateGuard } from '../Services/guards/deactivateauthguard.guard';



@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.scss']
})
export class EditUserComponent implements OnInit, IDeactivateGuard {

  constructor() { }
 

  ngOnInit(): void {
  }

  canExit(){
if(confirm('Are you Sure you want to Exit')){
  return true;
}else{
  return false
}
  }


}
