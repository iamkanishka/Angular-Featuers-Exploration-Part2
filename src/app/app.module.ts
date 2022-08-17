import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';

import { CategoriesComponent } from './categories/categories.component';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TemplateDrivenFormComponent } from './template-driven-form/template-driven-form.component';
import { ReavtiveFormsComponent } from './reavtive-forms/reavtive-forms.component';


import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthinterceptorService } from './Services/authinterceptor/authinterceptor.service';
import { Logginginterceptor } from './Services/logginginterceptor/logginginterceptor.service';
//import { LoadingSpinnerComponent } from './Shared/loading-spinner/loading-spinner.component';
import { NavigationComponent } from './navigation/navigation.component';
import { AuthTokenInterceptorService } from './Services/auth-token-interceptor/auth-token-interceptor.service';
import { AlertModalComponent } from './Shared/alert-modal/alert-modal.component';
import { PlaceholderDirective } from './Shared/placeholder/placeholder.directive';
import { UsermoduleModule } from './usermodule/usermodule.module';
import { PostModule } from './postmodule/post.module';
import { AuthModule } from './authmodule/auth.module';
import { FilterModule } from './filtermodule/filter.module';




@NgModule({
  declarations: [
    AppComponent,
    CategoriesComponent,
    HomeComponent,
    PageNotFoundComponent,
    TemplateDrivenFormComponent,
    ReavtiveFormsComponent,
  
   //  LoadingSpinnerComponent,
    NavigationComponent,
    AlertModalComponent,
    PlaceholderDirective,


  ],
  imports: [
    BrowserModule,
    UsermoduleModule,
    FilterModule,
    PostModule,
    AuthModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    

  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: AuthinterceptorService, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: Logginginterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: AuthTokenInterceptorService, multi: true }


  ],
  exports:[],
  bootstrap: [AppComponent]
})
export class AppModule { }
