import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { RegisterData } from "../models/register-data.model";

@Injectable({providedIn: "root"})
export class RegisterService {

  constructor(private http: HttpClient, private router: Router) { }

  // Fucntion to send the register object to the backend
  CreateUser(email: string, firstname: string, lastname: string, phone: string, password: string, passwordconf: string){
    // Creates the register object from a the register data model
    const registerData: RegisterData = {email: email, firstname: firstname, lastname: lastname, phone: phone, password: password, passwordconf: passwordconf};

    // Send the register object to the backend
    this.http.post<{msg: string}>('http://localhost:3080/users/register', registerData).subscribe(response => {
      console.log(response);
      if(response['msg'] == 'User registered successfully'){
        this.router.navigate(['/register/send-verification-email']);
      }
    });
  }
}
