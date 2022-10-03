import { Component, OnInit } from '@angular/core';
import { LogoutService } from 'src/app/errors/services/logout.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(public logoutService: LogoutService) { }

  ngOnInit(): void {
  }

  Logout(){
    this.logoutService.LogoutUser();
  }
}
