import { Injectable } from "@angular/core";
import { of } from "rxjs";
import { IAuthService } from "./iauth.service";

@Injectable({providedIn: "root"})
export class MockAuthService implements IAuthService {

  constructor() { }
  autoAuthUser(): void {
    throw new Error("Method not implemented.");
  }

  logoutUser(): void {
    throw new Error("Method not implemented.");
  }

  getIsAuth(): boolean {
    throw new Error("Method not implemented.");
  }

  login(email: string, password: string) {
    return of({token: "1234567890"});
  }
}
