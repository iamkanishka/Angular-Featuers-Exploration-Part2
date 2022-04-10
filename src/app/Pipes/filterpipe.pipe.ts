import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterpipe',
  //Pure Pipes - if theres any Chnage in the date then Pipe will be triggered Automatically, but pure should always be true because since it seeking realtime chnages it might go with performance issue 
  // Advice, Use only pure:true
  pure:true
})
export class FilterpipePipe implements PipeTransform {

  transform(value: any,filterstring:string){
    if(value.length ===0 || filterstring === ''){
      return value
    }
    const users = []
    for(const  user of value){
      if(user['name'] === filterstring){
        users.push(user)
      }
    }
  return users
  }

}
