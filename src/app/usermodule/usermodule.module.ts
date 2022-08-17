import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersComponent } from '../users/users.component';
import { UserComponent } from '../user/user.component';
import { EditUserComponent } from '../edit-user/edit-user.component';
import { FormsModule } from '@angular/forms';
import { UsersroutingmoduleModule } from './usersroutingmodule.module';
import { SharedModule } from '../sharedmodule/shared.module';
import { DummyService } from '../dummy/dummy.service';


@NgModule({
  declarations: [
    UserComponent,
    EditUserComponent,
    UsersComponent,
    
  ],
  imports: [
    
    SharedModule,
    UsersroutingmoduleModule

  ],
  // exports:[
  //   UserComponent,
  //   EditUserComponent,
  //   UsersComponent,
  // ]

})
export class UsermoduleModule { }
