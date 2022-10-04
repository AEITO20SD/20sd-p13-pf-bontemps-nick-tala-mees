import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { Subject } from "rxjs";
import { LoginData } from "../models/login-data.model";

@Injectable({providedIn: "root"})
export class AuthService {

  public isAuthenticated: boolean = false;
  private token: string | undefined;
  private tokenTimer: any;
  private authStatusListener = new Subject<boolean>();

  constructor(private http: HttpClient, private router: Router) { }

  // Function to get the auth token
  getToken(){
    return this.token;
  }

  // Function to get the auth status
  getIsAuth(){
    return this.isAuthenticated;
  }

  // Function to get the auth status listener
  getAuthStatusListener(){
    return this.authStatusListener.asObservable();
  }

  // Fucntion to send the login object to the backend
  loginUser(email: string, password: string){
    // Creates the login object from a the register data model
    const LoginData: LoginData = {email: email, password: password};

    // Send the login object to the backend
    this.http.post<{token: string, expiresIn: number}>('http://localhost:3080/users/login', LoginData).subscribe(response => {
      const token = response.token;
      this.token = token;
      if (token) {
        const expiresInDuration = response.expiresIn;
        this.setAuthTimer(expiresInDuration);
        this.isAuthenticated = true;
        this.authStatusListener.next(true);
        const now = new Date();
        const expirationDate = new Date(now.getTime() + expiresInDuration * 1000);
        this.saveAuthData(token, expirationDate);
        setTimeout(() => {
          this.router.navigate(['/']);
        }, 100);
      }
    });
  }

  // Function to auto authenticate the user when the page is refreshed
  autoAuthUser(){
    const authInformation = this.getAuthData() as any;
    const now = new Date();
    const expiresIn = authInformation.expirationDate.getTime() - now.getTime();
    if(expiresIn > 0){
      this.token = authInformation.token;
      this.isAuthenticated = true;
      this.setAuthTimer(expiresIn / 1000);
      this.authStatusListener.next(true);

    }

  }

  // Function to logout the user
  logoutUser(){
    this.token = undefined;
    this.isAuthenticated = false;
    this.authStatusListener.next(false);
    this.router.navigate(['/']);
    this.clearAuthData();
    clearTimeout(this.tokenTimer);
  }

  // Function to save the auth data to the local storage
  private saveAuthData(token: string, expirationDate: Date){
    localStorage.setItem('token', token);
    localStorage.setItem('expiration', expirationDate.toISOString());
  }

  // Function to set the auth timer
  private setAuthTimer(duration: number){
    this.tokenTimer = setTimeout(() => {
          this.logoutUser();
        }, duration * 1000);
  }

  // Function clear the local storage data
  private clearAuthData(){
    localStorage.removeItem('token');
    localStorage.removeItem('expiration');
  }

  // Function to get the auth data from the local storage
  private getAuthData(){
    const token = localStorage.getItem('token');
    const expirationDate = localStorage.getItem('expiration');
    if (!token || !expirationDate) {
      return;
    }
    return {
      token: token,
      expirationDate: new Date(expirationDate)
    }
  }
}
