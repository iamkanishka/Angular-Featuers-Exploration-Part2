import { HttpClient, HttpErrorResponse, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { throwError } from 'rxjs';
import { catchError, } from 'rxjs/operators';

export interface authResponse {
  idToken: string;
  email: string;
  refreshToken: string;
  expiresToken: string;
  localId: string;
  registered: boolean;
}


@Injectable({
  providedIn: 'root'
})
export class AuthserviceService {

  isLoggedIn = false

  constructor(private http: HttpClient) { }
  signUp(email: String, password: String) {
    return this.http.post<authResponse>('https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyDF8Thoia29xPyJBsFOWqGpjPpi73wbmUY', { email, password, returnSecureToken: true })
      .pipe(catchError(this.getErrorhandler))

  }
  login(email: String, password: String) {
    this.isLoggedIn = true
    return this.http.post<authResponse>('https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyDF8Thoia29xPyJBsFOWqGpjPpi73wbmUY', { email, password, returnSecureToken: true })
      .pipe(catchError(this.getErrorhandler))
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

  logout() {
    this.isLoggedIn = false

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
