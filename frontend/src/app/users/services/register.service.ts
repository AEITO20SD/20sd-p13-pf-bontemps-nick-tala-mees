import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { RegisterData } from "../models/register-data.model";

@Injectable({providedIn: "root"})
export class RegisterService {

  constructor(private http: HttpClient) { }

  // Fucntion to send the register object to the backend
  CreateUser(email: string, firstname: string, lastname: string, phone: string, password: string, passwordconf: string){
    // Creates the register object from a the register data model
    const registerData: RegisterData = {email: email, firstname: firstname, lastname: lastname, phone: phone, password: password, passwordconf: passwordconf};

    // Send the register object to the backend
    this.http.post('http://localhost:3080/users/register', registerData).subscribe(response => {
      console.log(response);
      });
  }
}
