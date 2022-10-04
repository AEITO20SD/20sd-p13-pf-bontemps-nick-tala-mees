import { Component, HostListener, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { AuthService } from 'src/app/users/services/auth.service';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { faXmark } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit, OnDestroy{
  public userIsAuthenticated: boolean = false;
  // private authListinerSubs: any;

  constructor(private authService: AuthService) { }

  ngOnInit() {
    // this.authListinerSubs = this.loginService.getAuthStatusListener().subscribe(isAuthenticated => {
    //   this.userIsAuthenticated = isAuthenticated;
    //   console.log(this.userIsAuthenticated);
    //   console.log(this.loginService.getToken());
    // });
    this.userIsAuthenticated = this.authService.getIsAuth();
    console.log(this.userIsAuthenticated);
  }


  barIsOut: boolean = false;
  isSticky: boolean = false;

  onLogout() {
    this.userIsAuthenticated = false;
    this.authService.logoutUser();
  }

  ngOnDestroy() {
    // this.authListinerSubs.unsubscribe();
  }

  MobileBar() { 
    this.barIsOut = !this.barIsOut 
  }

  @HostListener('window:scroll', ['$event'])
  checkScroll() {
    this.isSticky = window.pageYOffset >= 250;
  }

  faBars = faBars;
  faXmark = faXmark
}
