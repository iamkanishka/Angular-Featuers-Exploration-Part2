import { ThrowStmt } from "@angular/compiler";
import { Component } from "@angular/core";
import { FormControl, FormGroup, NgForm, Validators } from "@angular/forms";
import { Observable } from "rxjs";
import { authResponse, AuthserviceService } from "../Services/authservice/authservice.service";

@Component({
    selector: 'app-auth',
    templateUrl: './auth.component.html'
})
export class authComponent {
    isLoginMode: Boolean = true
    isLoading: Boolean = false
    authForm: FormGroup
    error: string = ''
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
        this.isLoading = true

        if (this.authForm.invalid) {
            return
        }

        let authObser: Observable<authResponse>

        if (this.isLoginMode) {
             authObser = this.authService.login(this.authForm.value.email, this.authForm.value.password)
          } else {
            authObser = this.authService.signUp(this.authForm.value.email, this.authForm.value.password)
         }

        authObser.subscribe((res) => {
            this.isLoading = false
            console.log(res);

        }, (errorMessage) => {
            console.log(errorMessage);
            this.isLoading = false
            this.error = errorMessage



        })
    }
    get authFormControls() {
        return this.authForm.controls
    }
}