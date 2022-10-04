import { Component, OnDestroy, OnInit } from '@angular/core';
import { AuthService } from 'src/app/users/services/auth.service';

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

  onLogout() {
    this.userIsAuthenticated = false;
    this.authService.logoutUser();
  }
}
