import { Component, HostListener, OnInit } from '@angular/core';
import { LogoutService } from 'src/app/errors/services/logout.service';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { faXmark } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(public logoutService: LogoutService) { }

  ngOnInit(): void {
  }

  barIsOut: boolean = false;
  isSticky: boolean = false;

  Logout() {
    this.logoutService.LogoutUser();
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
