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

@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    CategoriesComponent,
    HomeComponent,
    UserComponent,
    EditUserComponent,
    PageNotFoundComponent,
    TemplateDrivenFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
ReactiveFormsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
