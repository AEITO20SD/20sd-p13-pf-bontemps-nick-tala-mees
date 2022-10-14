import { Injectable } from '@angular/core';
import { BaseService } from 'src/app/services/base.service';
import { IAuthService } from '../interfaces/iauth.service';
import { LoginModel } from '../models/login.model';
import { UserModel } from '../models/user.model';
import { ResetModel } from '../models/reset.model';
import { ResetCheckModel } from '../models/reset-check.model';
import { AuthRepository } from '../repositories/auth.repository';
import { ConfirmModel } from '../models/confirm.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService extends BaseService implements IAuthService{

  constructor(private authRepository: AuthRepository) {
    super();
  }

  public confirmPasswordReset(id: any, uniqueString: string, password: string, passwordconf: string): void {
    const confirmData: ConfirmModel = {
      _id: id,
      uniqueString: uniqueString,
      password: password,
      passwordconf: passwordconf
    }
    this.authRepository.confirmPasswordReset(confirmData);
  }

  public checkIdAndUniqueString(id: any, uniqueString: string): void {
    const resetCheckData: ResetCheckModel = {
      _id: id,
      uniqueString: uniqueString
    };
    this.authRepository.checkIdAndUniqueString(resetCheckData);
  }

  // Calls the resetPassword function in the repository
  public resetPassword(email: string): void {
    const resetData: ResetModel = {
      email: email
    }
    this.authRepository.resetPassword(resetData);
  }

  // Gets the error message from the repository
  public getErrorMessage(): string {
    return this.authRepository.getErrorMessages();
  }

  // Calls the register function in the repository
  public createUser(email: string, firstname: string, lastname: string, phone: string, password: string, passwordconf: string): void {
    const userData: UserModel = {
      email: email,
      firstname: firstname,
      lastname: lastname,
      phone: phone,
      password: password,
      passwordconf: passwordconf
    }
    this.authRepository.createUser(userData);
  }

  // Calls the autoAuthUser function in the repository
  autoAuthUser(): void {
    this.authRepository.autoAuthUser();
  }

  // Calls the logoutUser function in the repository
  public logoutUser(): void {
    this.authRepository.logoutUser();
  }

  // Gets the getIsAuth status from the repository
  public getIsAuth(): boolean {
    return this.authRepository.getIsAuth();
  }

  // Calls the login function in the repository
  public login(email: string, password: string): void {
    const loginData: LoginModel = {
      email: email,
      password: password
    };
    this.authRepository.login(loginData);
  }
}

