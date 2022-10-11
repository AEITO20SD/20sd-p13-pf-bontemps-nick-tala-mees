import { Component, HostListener, OnDestroy, OnInit } from '@angular/core';
import { AuthService } from 'src/app/users/services/auth.service';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { faXmark } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit{
  public userIsAuthenticated: boolean = false;

  constructor(private authService: AuthService) { }

  ngOnInit() {
    this.userIsAuthenticated = this.authService.getIsAuth();
  }

  barIsOut: boolean = false;
  isSticky: boolean = false;

  onLogout() {
    this.userIsAuthenticated = false;
    this.authService.logoutUser();
  }
  
  MobileBar() {
    this.barIsOut = !this.barIsOut
  }

  @HostListener('window:scroll', ['$event'])
  checkScroll() {
    this.isSticky = window.pageYOffset >= 250;
  }

  faBars = faBars;
  faXmark = faXmark;
}
