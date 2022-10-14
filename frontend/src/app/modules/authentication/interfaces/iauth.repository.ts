import { Observable } from "rxjs";
import { LoginModel } from "../models/login.model";
import { UserModel } from "../models/user.model";

export interface IAuthRepository {
  login(loginData: LoginModel): any;
  getErrorMessages(): string;
  getToken(): string;
  getIsAuth(): boolean;
  setAuthTimer(duration: number): void;
  logoutUser(): void;
  saveAuthData(token: string, expirationDate: Date): void;
  clearAuthData(): void;
  autoAuthUser(): void;
  getAuthData(): any;
  createUser(userData: UserModel): void;
}
