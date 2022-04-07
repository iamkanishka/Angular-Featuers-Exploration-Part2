import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UsersComponent } from './users/users.component';
import { CategoriesComponent } from './categories/categories.component';
import { HomeComponent } from './home/home.component';
import { UserComponent } from './user/user.component';
import { EditUserComponent } from './edit-user/edit-user.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';


const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'category', component: CategoriesComponent },

  // { path: 'users', component: UsersComponent },
  // { path: 'user/:id/:name', component: UserComponent },
  
//Making Above Routes to Nested Routes 
  { path: 'users', component: UsersComponent,children:[
    { path: 'user/:id/:name', component: UserComponent },
    { path: 'user/:id/:name/edit', component: EditUserComponent }
  
  ] },

  // Note:- Please Add not-found Component Route in the End of the Route, if you add it in the first it will redirect not found since it 
  // it has been added in the first all down below are considered unidentified routes
  { path: 'not-found', component: PageNotFoundComponent },
  { path: '**', redirectTo:'not-found' },






];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
