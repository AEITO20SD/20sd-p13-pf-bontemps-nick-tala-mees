import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { LoginData } from "../models/login-data.model";

@Injectable({providedIn: "root"})
export class LoginService {

  private token: string | undefined;

  constructor(private http: HttpClient) { }

  GetToken(){
    return this.token;
  }

  // Fucntion to send the login object to the backend
  LoginUser(email: string, password: string){
    // Creates the login object from a the register data model
    const LoginData: LoginData = {email: email, password: password};

    // Send the login object to the backend
    this.http.post<{token: string}>('http://localhost:3080/users/login', LoginData).subscribe(response => {
      const token = response.token;
      this.token = token;
    });
  }
}
