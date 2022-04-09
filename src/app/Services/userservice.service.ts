import { Injectable,EventEmitter } from '@angular/core';
import { Subject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class UserserviceService {
//Sending Data from Event Emitter
 // userAddedEvent= new EventEmitter<Boolean>()

//Sending Data from Event Emitter
 userAddedEvent= new  Subject<boolean>()
  constructor() { }

  getuser(id:string){
    if(id==='1'){
      return {
        id:'1',
        name:'Rama'
      }
    }else{
      return {
        id:'2',
        name:'Krishna'
      }
    }
  }

  addUser(){
  //Event Emitter
    //  this.userAddedEvent.emit(true)

      //Event Emitter
     this.userAddedEvent.next(true)
  }
}
