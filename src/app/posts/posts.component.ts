import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import {Posts} from './posts.model'


@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit {

posts:Posts[]=[]
  postForm:FormGroup
  constructor(private httpClient:HttpClient) { 
    this.postForm= new FormGroup({
      title:new FormControl(null,[Validators.required]),
      description:new FormControl(null,[Validators.required])
      
    })
    this.getPosts()
  }

  ngOnInit(): void {
  }
  get postFormControls() {
    return this.postForm.controls;
  }

  addPost(){
    var postdata = this.postForm.value;
    this.httpClient.post<{[key:string]:Posts}>('https://ng-complete-guide-2abc1-default-rtdb.firebaseio.com/post.json',postdata)
    .subscribe((response)=>{
      console.log(response)
    this.getPosts()

    })

  }

  getPosts(){
  
    this.httpClient.get<{[key:string]:Posts}>('https://ng-complete-guide-2abc1-default-rtdb.firebaseio.com/post.json').
    pipe(map((response)=>{
      let posts = []
      for(let key in response){
      posts.push({...response[key],key})
      }
      return posts
    })).subscribe((response)=>{
      console.log(response)
      this.posts=response
    },(error)=>{
       console.log(error)
    })

  }

}
