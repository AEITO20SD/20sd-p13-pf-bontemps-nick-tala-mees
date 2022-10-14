import { Injectable } from "@angular/core";
import { of } from "rxjs";
import { LoginModel } from "../models/login.model";
import { IAuthRepository } from "./iauth.repository";

@Injectable({providedIn: "root"})
export class MockAuthRepository implements IAuthRepository {

  constructor() { }
  getErrorMessages(): string {
    throw new Error("Method not implemented.");
  }
  getToken(): string {
    throw new Error("Method not implemented.");
  }
  getIsAuth(): boolean {
    throw new Error("Method not implemented.");
  }
  setAuthTimer(duration: number): void {
    throw new Error("Method not implemented.");
  }
  logoutUser(): void {
    throw new Error("Method not implemented.");
  }
  saveAuthData(token: string, expirationDate: Date): void {
    throw new Error("Method not implemented.");
  }
  clearAuthData(): void {
    throw new Error("Method not implemented.");
  }
  autoAuthUser(): void {
    throw new Error("Method not implemented.");
  }
  getAuthData() {
    throw new Error("Method not implemented.");
  }
  login(loginData: LoginModel) {
    return of({token: "1234567890"});
  }
}
