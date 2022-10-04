import { Component, Inject } from '@angular/core';
import { NgForm } from '@angular/forms';
import { RegisterService } from '../../services/register.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  constructor(public registerService: RegisterService) { }

  public error: any = "";

  // Function to send data to the backend
  onRegister(form: NgForm) {

    // Calls the service to send the data to the backend
    this.registerService.CreateUser(form.value.email, form.value.firstname, form.value.lastname, form.value.phone, form.value.password, form.value.passwordconf);

    setTimeout(() => {
      this.error = this.registerService.getErrorMessage();
    }, 10);
  }
}
