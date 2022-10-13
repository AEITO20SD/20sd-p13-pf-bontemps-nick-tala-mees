export interface IAuthService {

  login(email: string ,password: string): void ;
  getIsAuth(): boolean ;
  logoutUser(): void ;
  autoAuthUser(): void ;

}
