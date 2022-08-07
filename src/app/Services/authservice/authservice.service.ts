import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

interface authResponse {
  idToken: string;
  email: string;
  refreshToken: string;
  expiresToken: string;
  localId: string;
}


@Injectable({
  providedIn: 'root'
})
export class AuthserviceService {

  isLoggedIn = false

  constructor(private http: HttpClient) { }
  signUp(email: String, password: String) {
    return this.http.post<authResponse>('https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyDF8Thoia29xPyJBsFOWqGpjPpi73wbmUY', { email, password, returnSecureToken: true })
  }
  login() {
    this.isLoggedIn = true
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
