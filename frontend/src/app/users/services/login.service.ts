import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { Subject } from "rxjs";
import { LoginData } from "../models/login-data.model";

@Injectable({providedIn: "root"})
export class LoginService {

  public isAuthenticated: boolean = false;
  private token: string | undefined;
  private tokenTimer: any;
  private authStatusListener = new Subject<boolean>();

  constructor(private http: HttpClient, private router: Router) { }

  getToken(){
    return this.token;
  }

  getIsAuth(){
    return this.isAuthenticated;
  }

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
        console.log(this.token)
        const expiresInDuration = response.expiresIn;
        this.tokenTimer = setTimeout(() => {
          this.logoutUser();
        }, expiresInDuration * 1000);
        this.isAuthenticated = true;
        this.authStatusListener.next(true);
        setTimeout(() => {
          this.router.navigate(['/']);
        }, 100);
      }
    });
  }

  logoutUser(){
    this.token = undefined;
    this.isAuthenticated = false;
    this.authStatusListener.next(false);
    this.router.navigate(['/']);
    clearTimeout(this.tokenTimer);
  }
}
