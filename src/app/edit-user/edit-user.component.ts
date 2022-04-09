import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { IDeactivateGuard } from '../Services/guards/deactivateauthguard.guard';



@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.scss']
})
export class EditUserComponent implements OnInit, IDeactivateGuard {

  user!:{id:string, name:string};
  editUserDetails!:{id:string, name:string};


  constructor(private activatedRoute:ActivatedRoute) { 
    this.activatedRoute.params.subscribe((data:Params)=>{
      this.user={
        id:data['id'],
        name:data['name']
      }
      this.editUserDetails= {...this.user}
    })
  }
 

  ngOnInit(): void {
  }

  canExit(){
  console.log(this.user);
  console.log(this.editUserDetails);
  
  if(this.editUserDetails.id!=this.user.id||this.editUserDetails.name!=this.user.name){
    if(confirm('All Changes will be Lost if you move to Another page')){
      return true;
    }else{
      return false
    }
  }
  
  return false
  }


}
