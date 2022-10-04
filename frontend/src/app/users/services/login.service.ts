import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { LoginData } from "../models/login-data.model";

@Injectable({providedIn: "root"})
export class LoginService {

  constructor(private http: HttpClient) { }

  // Fucntion to send the login object to the backend
  LoginUser(email: string, password: string){
    // Creates the login object from a the register data model
    const LoginData: LoginData = {email: email, password: password};

    // Send the login object to the backend
    this.http.post('http://localhost:3080/users/login', LoginData).subscribe(response => {
      console.log(response);
    });
  }
}
