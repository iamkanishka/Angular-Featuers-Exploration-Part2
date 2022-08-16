import { NgModule } from '@angular/core';

import { RouterModule, Routes } from '@angular/router';
import { AuthTokenGuard } from '../Services/guards/auth-token.guard';
import { UsersComponent } from '../users/users.component';
import { UserComponent } from '../user/user.component';
import { UserresolversResolver } from '../Services/resolvers/userresolvers.resolver';
import { EditUserComponent } from '../edit-user/edit-user.component';
import { DeactivateauthguardGuard } from '../Services/guards/deactivateauthguard.guard';

const routes: Routes = [{
  path: 'users', component: UsersComponent,
  //Note: - canActivate:[AuthguardGuard] will guard Parent-Chilren Components 
  canActivate: [AuthTokenGuard],

  //Note: - canActivateChild:[AuthguardGuard] will guard Parent's Chilrens Components 
  //canActivateChild:[AuthguardGuard], 
  children: [
    { path: 'user/:id/:name', component: UserComponent },

    //Note: - canDeactivate Works when theres a redirection from compoemnent A to  componenet B,
    // canDeactivate gets triggered in the Component A when thers a redirection 

    //Note: Using resolver is used to send the data to the components to before loading the respective componenet
    {
      path: 'user/:id/:name/edit', component: EditUserComponent, canDeactivate: [DeactivateauthguardGuard],
      resolve: { user: UserresolversResolver }
    }

  ]
},]


@NgModule({
  // Initiaitiating Child  Routes with "forChild" for the supportive Routing Module 
  imports: [RouterModule.forChild(routes)],

  exports: [RouterModule]
})

export class UsersroutingmoduleModule { }
