import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShortwordsPipe } from '../Pipes/shortwords.pipe';
import { FilterpipePipe } from '../Pipes/filterpipe.pipe';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [ShortwordsPipe,FilterpipePipe],
  imports: [
    CommonModule,
     FormsModule,
  ],
  exports:[ShortwordsPipe,FilterpipePipe,  CommonModule,
    FormsModule,]
})
export class SharedModule { }
