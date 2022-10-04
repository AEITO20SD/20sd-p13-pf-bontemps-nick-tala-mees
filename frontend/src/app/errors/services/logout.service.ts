import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable({providedIn: "root"})
export class LogoutService {

  constructor(private http: HttpClient) { }

  // Fucntion to send the login object to the backend
  LogoutUser(){
    // Creates the login object from a the register data model

    // Send the login object to the backend
    this.http.get('http://localhost:3080/users/logout').subscribe(response => {
      console.log(response);
    });
  }
}
