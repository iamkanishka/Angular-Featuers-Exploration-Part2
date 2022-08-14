import { Injectable } from '@angular/core';
import { HttpClient, HttpEventType, HttpHeaders, HttpParams } from '@angular/common/http';
import { map, tap,take, switchMap } from 'rxjs/operators';
import { Posts } from '../posts/posts.model';
import { AuthserviceService } from './authservice/authservice.service';

@Injectable({
  providedIn: 'root',
})
export class PostserviceService {

  constructor(private httpClient: HttpClient,private authServive:AuthserviceService) {
 
   }


  addPost(postdata: { [key: string]: Posts }) {
    return this.httpClient.post<{ [key: string]: Posts }>(
      'https://ng-complete-guide-2abc1-default-rtdb.firebaseio.com/post.json',
      postdata, {
      headers: new HttpHeaders({
        'custom-header': 'Post Request'
      }),
      params: new HttpParams().set('custom', 'hai'),
      observe: 'response'
    }
    );
  }

  getPosts() {
     // let searchParams = new HttpParams();
    // searchParams = searchParams.append('custom', 'hai')
    // searchParams = searchParams.append('name', 'kamishka')
  return   this.authServive.userSub.pipe(take(1), switchMap(user=>{
      let searchParams = new HttpParams();
      searchParams = searchParams.append('auth', user._token)
      return this.httpClient
      .get<{ [key: string]: Posts }>(
        'https://ng-complete-guide-2abc1-default-rtdb.firebaseio.com/post.json', {
    
        params: searchParams
      }
      )
    }),
    map((response) => {
          let posts = [];
          for (let key in response) {
            posts.push({ ...response[key], id: key });
          }
          return posts;
        })
    
    )
   


  
      // .pipe(
      //   map((response) => {
      //     let posts = [];
      //     for (let key in response) {
      //       posts.push({ ...response[key], id: key });
      //     }
      //     return posts;
      //   })
      // );
  }

  clearPosts() {
    return this.httpClient
      .delete(
        'https://ng-complete-guide-2abc1-default-rtdb.firebaseio.com/post.json', {
        headers: new HttpHeaders({
          'custom-header': 'Delete Request'
        }),
        params: new HttpParams().set('custom', 'hai'),
        observe: 'events',
        responseType: 'text'
      }).pipe(tap(response => {
        console.log(response);
        if (response.type === HttpEventType.Sent) {
          console.log('request sent');

        }

        if (response.type === HttpEventType.Response) {
          console.log(response.body);
          console.log(response.body);

        }
      }))
      .subscribe((response) => {
        console.log(response);
      });
  }
}
