import { LoginModel } from "../models/login.model";

export interface IAuthRepository {
  login(loginData: LoginModel): any;
}
