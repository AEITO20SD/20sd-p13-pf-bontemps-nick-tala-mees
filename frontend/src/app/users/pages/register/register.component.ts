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

  Error = "";

  // Function to send data to the backend
  onRegister(form: NgForm) {
    // Check if the form is valid
    if(form.invalid){
      this.Error = "An unknown error occured";
      return;

    // Checks if al the required fields are filled in
    } else if (
      form.value.email == "" || form.value.firstname == "" || form.value.lastname == "" ||
      form.value.phone == "" || form.value.password == "" || form.value.passwordconf == ""){
      this.Error = "Please enter all fields";
      return;

    // Checks if the password and password confirmation are the same
    } else if (form.value.password != form.value.passwordconf) {
      this.Error = "Passwords do not match";
      return;
    }

    // Calls the service to send the data to the backend
    this.registerService.CreateUser(form.value.email, form.value.firstname, form.value.lastname, form.value.phone, form.value.password, form.value.passwordconf);
  }

}
