import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShortwordsPipe } from '../Pipes/shortwords.pipe';
import { FilterpipePipe } from '../Pipes/filterpipe.pipe';
import { FormsModule } from '@angular/forms';
import { DummyService } from '../dummy/dummy.service';



@NgModule({
  declarations: [ShortwordsPipe,FilterpipePipe],
  imports: [
    CommonModule,
     FormsModule,
  ],
  exports:[ShortwordsPipe,FilterpipePipe,  CommonModule,
    FormsModule,],
    providers:[
      DummyService
    ],
})
export class SharedModule { }
