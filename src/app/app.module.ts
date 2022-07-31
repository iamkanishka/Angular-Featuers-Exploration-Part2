import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UsersComponent } from './users/users.component';
import { CategoriesComponent } from './categories/categories.component';
import { HomeComponent } from './home/home.component';
import { UserComponent } from './user/user.component';
import { EditUserComponent } from './edit-user/edit-user.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TemplateDrivenFormComponent } from './template-driven-form/template-driven-form.component';
import { ReavtiveFormsComponent } from './reavtive-forms/reavtive-forms.component';
import { FilterPipesComponent } from './filter-pipes/filter-pipes.component';
import { ShortwordsPipe } from './Pipes/shortwords.pipe';
import { FilterpipePipe } from './Pipes/filterpipe.pipe';
import { PostsComponent } from './posts/posts.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthinterceptorService } from './Services/authinterceptor/authinterceptor.service';
import { Logginginterceptor } from './Services/logginginterceptor/logginginterceptor.service';
import { authComponent } from './auth/auth.component';


@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    CategoriesComponent,
    HomeComponent,
    UserComponent,
    EditUserComponent,
    PageNotFoundComponent,
    TemplateDrivenFormComponent,
    ReavtiveFormsComponent,
    FilterPipesComponent,
    ShortwordsPipe,
    FilterpipePipe,
    PostsComponent,
    authComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
ReactiveFormsModule,
HttpClientModule

  ],
  providers: [
    {provide: HTTP_INTERCEPTORS, useClass:AuthinterceptorService, multi:true},
    {provide: HTTP_INTERCEPTORS, useClass:Logginginterceptor, multi:true}

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
