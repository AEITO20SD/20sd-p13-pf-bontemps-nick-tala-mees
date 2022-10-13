import { Injectable } from "@angular/core";
import { BaseRepository } from "src/app/repositories/base.repository";
import { IAuthRepository } from "../interfaces/iauth.repository";
import { LoginModel } from "../models/login.model";
import { HttpClient } from "@angular/common/http";

@Injectable({providedIn: "root"})
export class AuthRepository extends BaseRepository implements IAuthRepository {

  constructor(private http: HttpClient) {
    super();
  }

  login(loginData: LoginModel): any {
    this.http.post<{test: string}>("http://localhost:3080/api/auth/login", loginData).subscribe((response) => {
      console.log(response);
    });
  }


}
