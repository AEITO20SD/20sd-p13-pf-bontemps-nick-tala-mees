import { Injectable } from '@angular/core';
import { BaseService } from 'src/app/services/base.service';
import { IAuthService } from '../interfaces/iauth.service';
import { LoginModel } from '../models/login.model';
import { AuthRepository } from '../repositories/auth.repository';

@Injectable({
  providedIn: 'root'
})
export class AuthService extends BaseService implements IAuthService{

  constructor(private authRepository: AuthRepository) {
    super();
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
