import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Data, Params } from '@angular/router';
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

    
    //Note: -This is resolver way of Getting Static Data from the router (if any api trigger has to be done, before initialting the component then this will )
this.activatedRoute.data.subscribe((data:Data)=>{
  console.log(data.user);
  
  this.user={
    id:data.user.id,
    name:data.user.name
  }
  this.editUserDetails= {...this.user}
})


    //Note: -This is normal way of Getting Static Data from the router
    // this.activatedRoute.params.subscribe((data:Params)=>{
    //   this.user={
    //     id:data['id'],
    //     name:data['name']
    //   }
    //   this.editUserDetails= {...this.user}
    // })
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
