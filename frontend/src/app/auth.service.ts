import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { AuthData } from "./auth-data.model";

@Injectable({providedIn: "root"})
export class AuthService {

  constructor(private http: HttpClient) { }

  CreateUser(email: string, password: string){
    const authData: AuthData = {email: email, password: password};
    this.http.post('http://localhost:3080/', authData).subscribe(response => {
      console.log(response);
      });
  }
}
