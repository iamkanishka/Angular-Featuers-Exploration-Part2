import { ThrowStmt } from "@angular/compiler";
import { Component } from "@angular/core";
import { FormControl, FormGroup, NgForm, Validators } from "@angular/forms";

@Component({
    selector: 'app-auth',
    templateUrl: './auth.component.html'
})
export class authComponent {
    isLoginMode: Boolean = true
    authForm: FormGroup
    constructor() {
        this.authForm = new FormGroup({
            email: new FormControl(null, [Validators.required, Validators.email]),
            password: new FormControl(null, [Validators.required, Validators.minLength(6)])
        })

    }

    onSwitchMode() {
        this.isLoginMode = !this.isLoginMode
    }
    onFormSubmit() {
        console.log(this.authForm.value);

    }
    get authFormControls() {
        return this.authForm.controls
    }
}