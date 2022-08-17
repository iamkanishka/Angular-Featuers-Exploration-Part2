import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostsComponent } from '../posts/posts.component';
import { RouterModule } from '@angular/router';
import { AuthTokenGuard } from '../Services/guards/auth-token.guard';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

 

@NgModule({
  declarations: [PostsComponent],
  imports: [ 
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild([
      { path: '', component: PostsComponent, canActivate: [AuthTokenGuard] },

    ])
  ]
})
export class PostModule { }
