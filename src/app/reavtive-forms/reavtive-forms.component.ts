import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-reavtive-forms',
  templateUrl: './reavtive-forms.component.html',
  styleUrls: ['./reavtive-forms.component.scss']
})
export class ReavtiveFormsComponent implements OnInit {

  genders=['Male','Female']

  signUpForm:FormGroup

  constructor() {
    this.signUpForm =new FormGroup({
      userName: new FormControl(null,),
      email: new FormControl(null,),
      gender: new FormControl(null,)
  })
   }

  ngOnInit(): void {
  }



  onFomSubmit(){
   console.log(this.signUpForm);
    
   
     this.reset()
  }
  
  reset(){
   
  }

}
