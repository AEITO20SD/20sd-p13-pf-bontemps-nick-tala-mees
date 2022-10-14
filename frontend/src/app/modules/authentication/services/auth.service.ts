import { Injectable } from '@angular/core';
import { BaseService } from 'src/app/services/base.service';
import { IAuthService } from '../interfaces/iauth.service';
import { LoginModel } from '../models/login.model';
import { UserModel } from '../models/user.model';
import { AuthRepository } from '../repositories/auth.repository';

@Injectable({
  providedIn: 'root'
})
export class AuthService extends BaseService implements IAuthService{

  constructor(private authRepository: AuthRepository) {
    super();
  }

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

