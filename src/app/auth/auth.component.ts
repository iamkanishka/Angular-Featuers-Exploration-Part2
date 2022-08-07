import { ThrowStmt } from "@angular/compiler";
import { Component } from "@angular/core";
import { FormControl, FormGroup, NgForm, Validators } from "@angular/forms";
import { AuthserviceService } from "../Services/authservice/authservice.service";

@Component({
    selector: 'app-auth',
    templateUrl: './auth.component.html'
})
export class authComponent {
    isLoginMode: Boolean = true
    authForm: FormGroup
    constructor(private authService: AuthserviceService) {
        this.authForm = new FormGroup({
            email: new FormControl(null, [Validators.required, Validators.email]),
            password: new FormControl(null, [Validators.required, Validators.minLength(6)])
        })

    }

    onSwitchMode() {
        this.isLoginMode = !this.isLoginMode
    }
    onFormSubmit() {
        if (this.authForm.invalid) {
            return
        }
        this.authService.signUp(this.authForm.value.email, this.authForm.value.password).subscribe((res) => {
            console.log(res);

        }, (error) => {
            console.log(error);

        })

    }
    get authFormControls() {
        return this.authForm.controls
    }
}