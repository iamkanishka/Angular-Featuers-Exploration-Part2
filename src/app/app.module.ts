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


import { HttpClientModule,  } from '@angular/common/http';
import { NavigationComponent } from './navigation/navigation.component';
import { AlertModalComponent } from './Shared/alert-modal/alert-modal.component';
import { PlaceholderDirective } from './Shared/placeholder/placeholder.directive';
import { UsermoduleModule } from './usermodule/usermodule.module';
import { PostModule } from './postmodule/post.module';
import { AuthModule } from './authmodule/auth.module';
import { FilterModule } from './filtermodule/filter.module';
import { CoreModule } from './coremodule/core.module';
import { DummyService } from './dummy/dummy.service';




@NgModule({
  declarations: [
    AppComponent,
    CategoriesComponent,
    HomeComponent,
    PageNotFoundComponent,
    TemplateDrivenFormComponent,
    ReavtiveFormsComponent,
    NavigationComponent,
    AlertModalComponent,
    PlaceholderDirective,


  ],
  imports: [
    BrowserModule,
    FilterModule,
    CoreModule,
    //If we import Users and  Post module using lazyLoading, then we dont need to import  Users and  Post module in the AppModule,
    // we need to import them in the app-routing.mdoule.ts file
    // UsermoduleModule,
    // PostModule,
    AuthModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
 

  bootstrap: [AppComponent]
})
export class AppModule { }
