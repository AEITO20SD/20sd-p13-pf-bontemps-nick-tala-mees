import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { ResetData } from "../models/reset-data.model";

@Injectable({providedIn: "root"})
export class ResetService {

  constructor(private http:HttpClient) { }

  // Fucntion to send the reset object to the backend
  ResetPassword(email: string){
    // Creates the reset object from a the reset data model
    const resetData: ResetData = {email: email};

     this.http.post<{msg: string}>('http://localhost:3080/users/login/reset-password', resetData).subscribe(response => {
      console.log(response);
    });
  }
}
