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

  login(email: string, password: string) {
    const loginData: LoginModel = {
      email: email,
      password: password
    };
    this.authRepository.login(loginData);
  }
}
