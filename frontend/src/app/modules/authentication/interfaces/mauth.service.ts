import { Injectable } from "@angular/core";
import { of } from "rxjs";
import { IAuthService } from "./iauth.service";

@Injectable({providedIn: "root"})
export class MockAuthService implements IAuthService {

  constructor() { }

  confirmPasswordReset(id: any, uniqueString: string, password: string, passwordconf: string): void {
    throw new Error("Method not implemented.");
  }

  checkIdAndUniqueString(id: string, uniqueString: string): void {
    throw new Error("Method not implemented.");
  }

  resetPassword(email: string): void {
    throw new Error("Method not implemented.");
  }

  getErrorMessage(): string {
    throw new Error("Method not implemented.");
  }

  createUser(email: string, firstname: string, lastname: string, phone: string, password: string, passwordconf: string): void {
    throw new Error("Method not implemented.");
  }

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
