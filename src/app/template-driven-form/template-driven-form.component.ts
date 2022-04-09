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
  submitted:boolean=false
  user={
    userName:'',
    email:'',
    gender:'',
    about:''
  }
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
prefillsetValue(){
  this.signUpform.form.setValue({
    userData:{
      email:"kanishkabc123@gmail.com",
      userName:"kanishka"
    },
    gender:"male",
    about:"Hi this is about section"

  })
}

prefillpatchValue(){
  this.signUpform.form.patchValue({
    userData:{
      email:"kanishkanaik97@gmail.com",
      userName:"kanishka Hotshot"
    },
 

  })
}


onFomSubmit(){
  this.submitted=true;
  this.user.userName=this.signUpform.value.userData.userName
  this.user.email=this.signUpform.value.userData.email
  this.user.gender=this.signUpform.value.gender 
   this.user.about=this.signUpform.value.about
   console.log(this.user)
   this.reset()
}

reset(){
  this.signUpform.reset()
}

}
