import { Injectable } from "@angular/core";
import { BaseRepository } from "src/app/repositories/base.repository";
import { IAuthRepository } from "../interfaces/iauth.repository";
import { LoginModel } from "../models/login.model";
import { HttpClient } from "@angular/common/http";
import { Observable, Subject } from "rxjs";
import { Router } from "@angular/router";
import { UserModel } from "../models/user.model";
import { ResetModel } from "../models/reset.model";
import { ResetCheckModel } from "../models/reset-check.model";
import { ConfirmModel } from "../models/confirm.model";

@Injectable({providedIn: "root"})
export class AuthRepository extends BaseRepository implements IAuthRepository {

  public isAuthenticated: boolean = false;
  public error: string = "";
  private token: string = "";
  private authStatusListener = new Subject<boolean>();
  private tokenTimer: any;


  constructor(private http: HttpClient, private router: Router) {
    super();
  }

  public confirmPasswordReset(confirmData: ConfirmModel): void {
    this.http.post<{msg: string, error: string}>('http://localhost:3080/users/login/reset-password-form', confirmData).subscribe(response => {
      if(response.error == "true"){
        this.error = response.msg;
        return
      } else if(response['msg'] == 'Password has been succesfully reset'){
        this.router.navigate(['/login']);
      }
    });
  }

  public checkIdAndUniqueString(resetCheckData: ResetCheckModel): void {
    console.log(resetCheckData);
    this.http.post<{msg: string, error: string}>('http://localhost:3080/users/login/reset-password-check', resetCheckData).subscribe(response => {
      if(response.error == "true"){
        this.error = response.msg;
        return
      } else if(response['msg'] == 'Unique string does not compare'){
        this.router.navigate(['/error/403']);
      } else if(response['msg'] == 'Link expired'){
        this.router.navigate(['/error/410']);
      }
    });
  }

  public resetPassword(resetData: ResetModel): void {
    console.log(resetData);
    this.http.post<{msg: string, error: string}>('http://localhost:3080/users/login/reset-password', resetData).subscribe(response => {
      console.log(response);
      if(response.error == "true"){
        this.error = response.msg;
        return
      }
      if(response['msg'] == 'Password recovery email send'){
        this.router.navigate(['/login/reset-password-send']);
      }
    });
  }

  public createUser(userData: UserModel): void {
    this.http.post<{msg: string, error: string}>("http://localhost:3080/users/register", userData).subscribe((response) => {
      if(response.error == "true"){
        this.error = response.msg;
        return
      } else if(response['msg'] == 'User registered successfully'){
        this.router.navigate(['/register/send-verification-email']);
      }
    });
  }

  public login(loginData: LoginModel): any {
    this.http.post<{token: string, expiresIn: number, error: string, msg: string}>("http://localhost:3080/users/login", loginData).subscribe((response) => {
      if(response.error == "true"){
        this.error = response.msg;
        return
      } else {
        this.token = response.token;
        if(response.token){
          const expiresInDuration = response.expiresIn;
          this.setAuthTimer(expiresInDuration);
          this.isAuthenticated = true;
          this.authStatusListener.next(true);
          const now = new Date();
          const expirationDate = new Date(now.getTime() + expiresInDuration * 1000);
          this.saveAuthData(response.token, expirationDate);
          setTimeout(() => {
            this.router.navigate(['/']);
          }, 100);
        }
      }
    });
  }

  // Returns the error message variable when the login has failed
  public getErrorMessages(): string {
    return this.error;
  }


  // Returns the token variable
  public getToken(): string {
    return this.token;
  }

  // Returns the authentaction status
  public getIsAuth(): boolean{
    return this.isAuthenticated;
  }

  // Function to set the auth timer
  public setAuthTimer(duration: number): void{
    this.tokenTimer = setTimeout(() => {
      this.logoutUser();
    }, duration * 1000);
  }

  // Function to logout the user
  public logoutUser(): void{
    this.token = "";
    this.isAuthenticated = false;
    this.authStatusListener.next(false);
    this.router.navigate(['/']);
    this.clearAuthData();
    clearTimeout(this.tokenTimer);
  }

  // Function clear the local storage data
  public clearAuthData(): void{
    localStorage.removeItem('token');
    localStorage.removeItem('expiration');
  }

  // Function to save the auth data to the local storage
  public saveAuthData(token: string, expirationDate: Date): void{
    localStorage.setItem('token', token);
    localStorage.setItem('expiration', expirationDate.toISOString());
  }

  // Function to auto authenticate the user when the page is refreshed
  public autoAuthUser(): void{
    const authInformation = this.getAuthData() as any;
    if (!authInformation) {
      return;
    }
    const now = new Date();
    const expiresIn = authInformation.expirationDate.getTime() - now.getTime();
    if(expiresIn > 0){
      this.token = authInformation.token;
      this.isAuthenticated = true;
      this.setAuthTimer(expiresIn / 1000);
      this.authStatusListener.next(true);
    }
  }

  // Function to get the auth data from the local storage
  public getAuthData(): any{
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

