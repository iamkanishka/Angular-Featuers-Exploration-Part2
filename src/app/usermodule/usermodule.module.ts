import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersComponent } from '../users/users.component';
import { UserComponent } from '../user/user.component';
import { EditUserComponent } from '../edit-user/edit-user.component';
import { FormsModule } from '@angular/forms';
import { UsersroutingmoduleModule } from './usersroutingmodule.module';




@NgModule({
  declarations: [
    UserComponent,
    EditUserComponent,
    UsersComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    UsersroutingmoduleModule

  ],
  // exports:[
  //   UserComponent,
  //   EditUserComponent,
  //   UsersComponent,
  // ]
})
export class UsermoduleModule { }
