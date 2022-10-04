import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  constructor(public authService: AuthService) { }

  // Function to send data to the backend
  onLogin(form: NgForm) {
    if(form.invalid){
      return;
    }
    this.authService.loginUser(form.value.email, form.value.password);
  }

}
