import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from './auth.service';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'frontend';

  constructor(public authService: AuthService) { }

  onLogin(form: NgForm){
    console.log(form.value);
    if(form.invalid){
      return;
    }
    this.authService.CreateUser(form.value.email, form.value.password);
  }
}
