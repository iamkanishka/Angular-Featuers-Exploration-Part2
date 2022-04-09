import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-template-driven-form',
  templateUrl: './template-driven-form.component.html',
  styleUrls: ['./template-driven-form.component.scss']
})
export class TemplateDrivenFormComponent implements OnInit {

  @ViewChild('f') signUpform!:NgForm

  gender='male'
  about=''
  constructor() { }

  ngOnInit(): void {
  }
//   onSubmit(f:NgForm){
//   // getting the Form Data by initiating the identtifier in the form and sending as a paramater in this function
//   //  console.log(f);

//  }
onSubmit(){
//   // getting the Form Data by initiating the identtifier in the form and fetching from the viewchild

console.log(this.signUpform);

}
checkData(){
console.log(this.signUpform);

}

}
