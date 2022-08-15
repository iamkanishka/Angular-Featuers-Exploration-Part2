import { ThrowStmt } from "@angular/compiler";
import { Component, ComponentFactoryResolver, OnDestroy, ViewChild } from "@angular/core";
import { FormControl, FormGroup, NgForm, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { Observable, Subscription } from "rxjs";
import { authResponse, AuthserviceService } from "../Services/authservice/authservice.service";
import { AlertModalComponent } from "../Shared/alert-modal/alert-modal.component";
import { PlaceholderDirective } from "../Shared/placeholder/placeholder.directive";

@Component({
    selector: 'app-auth',
    templateUrl: './auth.component.html'
})
export class authComponent implements OnDestroy {
    isLoginMode: Boolean = true
    isLoading: Boolean = false
    authForm: FormGroup
    error: string = ''
    closeSubscription! :Subscription

    @ViewChild(PlaceholderDirective) alertHost! :PlaceholderDirective
    constructor(private authService: AuthserviceService, private router: Router, private componentFactoryResolver: ComponentFactoryResolver) {

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

            this.router.navigate(['/'])

        }, (errorMessage) => {
            console.log(errorMessage);
            this.isLoading = false
            this.showErrorMwssage(errorMessage)
            this.error = errorMessage



        })
    }

    showErrorMwssage(message: string) {
        const componentFactory = this.componentFactoryResolver.resolveComponentFactory(AlertModalComponent)
         this.alertHost.viewContainerRef.clear()
        const compoemnentRef = this.alertHost.viewContainerRef.createComponent(componentFactory)
         compoemnentRef.instance.error = message
        this.closeSubscription = compoemnentRef.instance.onClose.subscribe(()=>{
          this.closeSubscription.unsubscribe();
         this.alertHost.viewContainerRef.clear()

         })
    }

    ngOnDestroy(): void {
        if(this.closeSubscription){
            this.closeSubscription.unsubscribe();

        }
        
    }

    get authFormControls() {
        return this.authForm.controls
    }
}