import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import {Posts} from '../posts/posts.model'

@Injectable({
  providedIn: 'root'
})
export class PostserviceService {




  constructor(private httpClient:HttpClient) { }



  addPost(postdata:{[key:string]:Posts}){

  return   this.httpClient.post<{[key:string]:Posts}>('https://ng-complete-guide-2abc1-default-rtdb.firebaseio.com/post.json',postdata)
    // .subscribe((response)=>{
    //   console.log(response)
    // this.getPosts()

    // })

  }

  getPosts(){
  
return  this.httpClient.get<{[key:string]:Posts}>('https://ng-complete-guide-2abc1-default-rtdb.firebaseio.com/post.json').
    pipe(map((response)=>{
      let posts = []
      for(let key in response){
      posts.push({...response[key],key})
      }
      return posts
    }))
    // .subscribe((response)=>{
    //   console.log(response)
    //   this.posts=response
    // },(error)=>{
    //    console.log(error)
    // })

  }

}
