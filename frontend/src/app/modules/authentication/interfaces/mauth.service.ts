import { Injectable } from "@angular/core";
import { of } from "rxjs";
import { IAuthService } from "./iauth.service";

@Injectable({providedIn: "root"})
export class MockAuthService implements IAuthService {

  constructor() { }
  login(email: string, password: string) {
    return of({token: "1234567890"});
  }
}
