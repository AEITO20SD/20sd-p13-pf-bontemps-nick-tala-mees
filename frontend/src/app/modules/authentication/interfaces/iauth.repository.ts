import { Observable } from "rxjs";
import { ConfirmModel } from "../models/confirm.model";
import { LoginModel } from "../models/login.model";
import { ResetCheckModel } from "../models/reset-check.model";
import { ResetModel } from "../models/reset.model";
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
  resetPassword(resetData: ResetModel): void;
  checkIdAndUniqueString(resetCheckData: ResetCheckModel): void;
  confirmPasswordReset( confirmData: ConfirmModel ): void;
}
