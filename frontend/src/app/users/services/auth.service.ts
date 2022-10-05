import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { Subject } from "rxjs";
import { LoginData } from "../models/login-data.model";
import { RegisterData } from "../models/register-data.model";
import { ResetData } from "../models/reset-data.model";
import { ResetFormData, ResetFormDataCheck } from "../models/reset-form-data.model";

@Injectable({providedIn: "root"})
export class AuthService {

  public isAuthenticated: boolean = false;
  private token: string | undefined;
  private tokenTimer: any;
  private authStatusListener = new Subject<boolean>();
  public message: any;

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

  // Function to send error message to the login component
  getErrorMessage(){
    return this.message;
  }

  // Fucntion to send the login object to the backend
  loginUser(email: string, password: string){
    // Creates the login object from a the register data model
    const LoginData: LoginData = {email: email, password: password};

    // Send the login object to the backend
    this.http.post<{token: string, expiresIn: number, msg: string, error: string}>('http://localhost:3080/users/login', LoginData).subscribe(response => {
      if(response.error == "true"){
        this.message = response.msg;
        return
      }
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

  // Fucntion to send the register object to the backend
  CreateUser(email: string, firstname: string, lastname: string, phone: string, password: string, passwordconf: string){
    // Creates the register object from a the register data model
    const registerData: RegisterData = {email: email, firstname: firstname, lastname: lastname, phone: phone, password: password, passwordconf: passwordconf};

    // Send the register object to the backend
    this.http.post<{msg: string, error: string}>('http://localhost:3080/users/register', registerData).subscribe(response => {
      console.log(response);
      if(response.error == "true"){
        this.message = response.msg;
        return
      }
      if(response['msg'] == 'User registered successfully'){
        this.router.navigate(['/register/send-verification-email']);
      }
    });
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

  // Fucntion to send the reset object to the backend
  ResetPassword(email: string){
    // Creates the reset object from a the reset data model
    const resetData: ResetData = {email: email};

    this.http.post<{msg: string, error: string}>('http://localhost:3080/users/login/reset-password', resetData).subscribe(response => {
      console.log(response);
      if(response.error == "true"){
        this.message = response.msg;
        return
      }
      if(response['msg'] == 'Password recovery email send'){
        this.router.navigate(['/login/reset-password-send']);
      }
    });
  }

  // Function to check if the id and unique string are valid
  checkIdAndUniqueString(id: any, uniqueString: string) {
    // Creates the resetFormDataCheck object to send to the backend
    const resetFormDataCheck: ResetFormDataCheck = {uniqueString: uniqueString, _id: id};

    this.http.post<{msg: string, error: string}>('http://localhost:3080/users/login/reset-password-check', resetFormDataCheck).subscribe(response => {
      if(response.error == "true"){
        this.message = response.msg;
        return
      }
      if(response['msg'] == 'Unique string does not compare'){
        this.router.navigate(['/error/403']);
      }
      if(response['msg'] == 'Link expired'){
        this.router.navigate(['/error/410']);
      }
    });
  }

  // Function to send the new password to the backend
  ResetPasswordForm(id: any, uniqueString: string, password: string, passwordConfirm: string) {
    // Creates the resetFormData object to send to the backend
    const resetFormData: ResetFormData = {uniqueString: uniqueString, _id: id, password: password, confirmPassword: passwordConfirm};

    this.http.post<{msg: string, error: string}>('http://localhost:3080/users/login/reset-password-form', resetFormData).subscribe(response => {
      if(response.error == "true"){
        this.message = response.msg;
        return
      }
      if(response['msg'] == 'Password has been succesfully reset'){
        this.router.navigate(['/login']);
      }
    });
  }
}
