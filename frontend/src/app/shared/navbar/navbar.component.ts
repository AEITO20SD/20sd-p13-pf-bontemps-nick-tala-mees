import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { LogoutService } from 'src/app/errors/services/logout.service';
import { LoginService } from 'src/app/users/services/login.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit, OnDestroy{
  public userIsAuthenticated: boolean = false;
  // private authListinerSubs: any;

  constructor(private loginService: LoginService) { }

  ngOnInit() {
    // this.authListinerSubs = this.loginService.getAuthStatusListener().subscribe(isAuthenticated => {
    //   this.userIsAuthenticated = isAuthenticated;
    //   console.log(this.userIsAuthenticated);
    //   console.log(this.loginService.getToken());
    // });
    this.userIsAuthenticated = this.loginService.getIsAuth();
    console.log(this.userIsAuthenticated);
  }

  onLogout() {
    this.userIsAuthenticated = false;
    this.loginService.logoutUser();
  }

  ngOnDestroy() {
    // this.authListinerSubs.unsubscribe();
  }
}
