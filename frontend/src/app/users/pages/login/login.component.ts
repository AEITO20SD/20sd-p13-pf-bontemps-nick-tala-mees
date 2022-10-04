import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { LoginService } from '../../services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  constructor(public loginService: LoginService) { }

  // Function to send data to the backend
  onLogin(form: NgForm) {
    if(form.invalid){
      return;
    }
    this.loginService.loginUser(form.value.email, form.value.password);
  }

}
