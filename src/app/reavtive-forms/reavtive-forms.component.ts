import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-reavtive-forms',
  templateUrl: './reavtive-forms.component.html',
  styleUrls: ['./reavtive-forms.component.scss'],
})
export class ReavtiveFormsComponent implements OnInit {
  genders = ['Male', 'Female'];

  signUpForm: FormGroup;

  constructor() {
    //Single User Form Group
    //   this.signUpForm =new FormGroup({
    //     userName: new FormControl('',Validators.required),
    //     email: new FormControl('',[Validators.required,Validators.email]),
    //     gender: new FormControl('',)
    // })

    //Using FormGroup in a Form Group
    // this.signUpForm = new FormGroup({
    //   userData :new FormGroup({
    //     userName: new FormControl('', Validators.required),
    //     email: new FormControl('', [Validators.required, Validators.email]),

    //   }),

    //   gender: new FormControl(''),
    // });

    this.signUpForm = new FormGroup({
      userName: new FormControl('', Validators.required),
      email: new FormControl('', [Validators.required, Validators.email]),

      gender: new FormControl(''),
      hobbies:new FormArray([])
    });
  }

  get signUpFormhobbiesControls() {
    return (<FormArray>this.signUpForm.get('hobbies')).controls 
  }


  get signUpFormControls() {
    return this.signUpForm.controls;
  }

  ngOnInit(): void {
    console.log(this.signUpForm);
    console.log(this.signUpForm.controls.userData);
  }

  onaddForms() {
    const control = new FormControl(null, [Validators.required]);
    (<FormArray>this.signUpForm.get('hobbies')).push(control) 
  }

  onFomSubmit() {
    console.log(this.signUpForm);

    this.reset();
  }

  reset() {}
}
