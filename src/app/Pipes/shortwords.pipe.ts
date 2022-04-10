import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'shortwords'
})
export class ShortwordsPipe implements PipeTransform {

  
  transform(value: unknown,limit:number): string {
    if(String(value).length>limit){
      return String(value).substring(0,limit) + ' ...';

    }else{
      return String(value)
    }
  }

}
