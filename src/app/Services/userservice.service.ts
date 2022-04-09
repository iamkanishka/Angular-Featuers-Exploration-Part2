import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserserviceService {

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
}
