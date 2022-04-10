import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

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
      userName: new FormControl('',Validators.required),
      email: new FormControl('',[Validators.required,Validators.email]),
      gender: new FormControl('',)
  })
   }

  get signUpFormControls(){
    return this.signUpForm.controls
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
