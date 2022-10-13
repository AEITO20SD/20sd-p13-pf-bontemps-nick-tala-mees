import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent {

  constructor(private authService: AuthService) { }

  public error: string = "";

  // Function that triggers when the form is submitted
  public onSubmit(form: NgForm): void {
    if (form.valid) {
      this.authService.login(form.value.email, form.value.password);
    }
  }
}
