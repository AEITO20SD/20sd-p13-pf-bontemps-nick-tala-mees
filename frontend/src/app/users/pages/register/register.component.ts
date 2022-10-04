import { Component, Inject } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  constructor(public authService: AuthService) { }

  public error: any = "";

  // Function to send data to the backend
  onRegister(form: NgForm) {

    // Calls the service to send the data to the backend
    this.authService.CreateUser(form.value.email, form.value.firstname, form.value.lastname, form.value.phone, form.value.password, form.value.passwordconf);

    // Timer that waits for the response from the backend
    setTimeout(() => {
      this.error = this.authService.getErrorMessage();
    }, 250);
  }
}
