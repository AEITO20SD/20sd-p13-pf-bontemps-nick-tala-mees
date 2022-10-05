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

  public error: any = "";

  // Function to send data to the backend
  onLogin(form: NgForm) {
    this.authService.loginUser(form.value.email, form.value.password);

    // Timer that waits for the response from the backend
    setTimeout(() => {
      this.error = this.authService.getErrorMessage();
    }, 250);
  }
}
