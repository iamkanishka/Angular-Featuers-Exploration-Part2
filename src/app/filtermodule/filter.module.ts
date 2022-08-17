import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FilterPipesComponent } from '../filter-pipes/filter-pipes.component';

import { RouterModule } from '@angular/router';

import { SharedModule } from '../sharedmodule/shared.module';



@NgModule({
  declarations: [
    FilterPipesComponent,

  ],
  imports: [

    SharedModule,
    RouterModule.forChild([
      { path: 'filterpipes', component: FilterPipesComponent },

    ])
  ]
})
export class FilterModule { }
