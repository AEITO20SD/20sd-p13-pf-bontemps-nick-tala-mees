import { Injectable } from "@angular/core";
import { of } from "rxjs";
import { ConfirmModel } from "../models/confirm.model";
import { LoginModel } from "../models/login.model";
import { ResetCheckModel } from "../models/reset-check.model";
import { ResetModel } from "../models/reset.model";
import { UserModel } from "../models/user.model";
import { IAuthRepository } from "./iauth.repository";

@Injectable({providedIn: "root"})
export class MockAuthRepository implements IAuthRepository {

  constructor() { }

  confirmPasswordReset(confirmData: ConfirmModel): void {
    throw new Error("Method not implemented.");
  }
  checkIdAndUniqueString(resetCheckData: ResetCheckModel): void {
    throw new Error("Method not implemented.");
  }
  resetPassword(resetData: ResetModel): void {
    throw new Error("Method not implemented.");
  }
  createUser(userData: UserModel): void {
    throw new Error("Method not implemented.");
  }
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
