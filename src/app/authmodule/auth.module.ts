import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { authComponent } from '../auth/auth.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoadingSpinnerComponent } from '../Shared/loading-spinner/loading-spinner.component';



@NgModule({
    
    declarations: [authComponent,LoadingSpinnerComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild([
   { path: 'auth', component: authComponent },
  ])
  ]
})
export class AuthModule { }
