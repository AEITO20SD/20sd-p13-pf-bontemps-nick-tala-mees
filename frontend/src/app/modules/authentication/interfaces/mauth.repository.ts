import { Injectable } from "@angular/core";
import { of } from "rxjs";
import { LoginModel } from "../models/login.model";
import { IAuthRepository } from "./iauth.repository";

@Injectable({providedIn: "root"})
export class MockAuthRepository implements IAuthRepository {

  constructor() { }
  login(loginData: LoginModel) {
    return of({token: "1234567890"});
  }
}
