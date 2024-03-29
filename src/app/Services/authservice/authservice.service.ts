import { HttpClient, HttpErrorResponse, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, Subject, throwError, } from 'rxjs';
import { catchError,tap } from 'rxjs/operators';
import { User } from 'src/app/auth/user.model';


export interface authResponse {
  idToken: string;
  email: string;
  refreshToken: string;
  expiresToken: string;
  localId: string;
  registered: boolean;
  expiresIn:number
}


@Injectable({
  providedIn: 'root'
})
export class AuthserviceService {

  isLoggedIn = false
  userSub = new BehaviorSubject<User>(null!);
  clearTimeout:any

  constructor(private http: HttpClient, private router:Router) { }
  signUp(email: String, password: String) {
    return this.http.post<authResponse>('https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyDF8Thoia29xPyJBsFOWqGpjPpi73wbmUY', { email, password, returnSecureToken: true })
      .pipe(catchError(this.getErrorhandler),tap(this.handleUser.bind(this)))

  }
  login(email: String, password: String) {
    this.isLoggedIn = true
    return this.http.post<authResponse>('https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyDF8Thoia29xPyJBsFOWqGpjPpi73wbmUY', { email, password, returnSecureToken: true })
      .pipe(catchError(this.getErrorhandler),tap(this.handleUser.bind(this)))
  }


  private handleUser(authResponse:authResponse){
    const expireDate = new Date(new Date().getTime()+ authResponse.expiresIn * 1000)
    const user = new User(authResponse.email, authResponse.localId, authResponse.idToken,expireDate)
    this.userSub.next(user)
    localStorage.setItem('userData', JSON.stringify(user))
    this.autoLogout( authResponse.expiresIn * 1000)
  }

  getErrorhandler(errorResp: HttpErrorResponse) {
    let errorMessage: string = 'An Errro Occured'
    if (!errorResp.error || !errorResp.error.error) {
      return throwError(errorMessage)

    }
    switch (errorResp.error.error.message) {
      case 'EMAIL_EXISTS':
        errorMessage = "Email Already Exist"
        break
      case 'EMAIL_NOT_FOUND':
        errorMessage = "Email Doesnt Exist";
        break
      case 'INVALID_PASSWORD':
        errorMessage = "Invalid Password";
        break
      case 'USER_DISABLED':
        errorMessage = "User Disabled";
        break
      default :
      errorMessage ='Something Went wrong';

    }
    return throwError(errorMessage)
  }

  autoLogin(){
    let userData:string = localStorage.getItem('userData')!
    let userDataParsed:{ email: string,  localId: string,  _token: string,  expirationDate: Date} = JSON.parse(userData);
    if(!userDataParsed){ return;}

    let user = new User(userDataParsed.email, userDataParsed._token,userDataParsed.localId,new Date(userDataParsed.expirationDate));
    if(user._token){
      this.userSub.next(user)
    }

    let date = new Date().getTime()
    let expirationDate=  new Date(userDataParsed.expirationDate).getTime();
    this.autoLogout(expirationDate-date)
   
  }

  autoLogout(expirationDate:number){
 this.clearTimeout= setTimeout(()=>{
     this.logout()
  },expirationDate)
   
  }

  logout() {
    this.userSub.next(null!)
    this.router.navigateByUrl('/auth')
    localStorage.removeItem('userData')
   if(this.clearTimeout){
    clearTimeout(this.clearTimeout)
   }

  }
  isAuthenticated() {
    // return this.isLoggedIn
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(this.isLoggedIn)
      }, 1000)
    })
  }
}
