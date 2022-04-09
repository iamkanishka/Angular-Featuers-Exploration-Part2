import { Injectable,EventEmitter } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class UserserviceService {

  userAddedEvent= new EventEmitter<Boolean>()

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
    this.userAddedEvent.emit(true)
  }
}
