import { HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { LoginService } from "../services/login.service";
import { Injectable } from "@angular/core";

@Injectable()
export class AuthIntercepter implements HttpInterceptor {
  constructor(private loginService: LoginService) { }

  intercept(req: HttpRequest<any>, next: HttpHandler) {
    const authToken = this.loginService.getToken();
    const authRequest = req.clone({
      headers: req.headers.set("Authorization", "Bearer " + authToken)
    });
    return next.handle(authRequest);
  }
}
