export interface IAuthService {

  login(email: string ,password: string): void ;
  getIsAuth(): boolean ;
  logoutUser(): void ;
  autoAuthUser(): void ;
  createUser(email: string, firstname: string, lastname: string, phone: string ,password: string, passwordconf: string): void ;
  getErrorMessage(): string ;

}
