import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import {Posts} from './posts.model'
import { PostserviceService } from '../Services/postservice.service';



@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit {

posts:Posts[]=[]
  postForm:FormGroup
  constructor(private httpClient:HttpClient, private postserviceService:PostserviceService) { 
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
   this.postserviceService.addPost(postdata).subscribe((response)=>{
      console.log(response)
    this.getPosts()

    },(error)=>{
 console.log(error);
 
    },()=>{
      console.log('add complete');
      
    })

  }

  getPosts(){
    this.postserviceService.getPosts().subscribe((response)=>{
      console.log(response)
      this.posts=response
    },(error)=>{
       console.log(error)
    },()=>{
      console.log('get complete');
      
    })

  }
  clearPosts(){
    this.postserviceService.clearPosts()
    this.getPosts()
  }

}
