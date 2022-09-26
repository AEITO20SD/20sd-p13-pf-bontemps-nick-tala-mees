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

  // Function to send data to the backend
  onRegister(form: NgForm) {
    if(form.invalid){
      return;
    } else if (form.value.password != form.value.passwordconf) {
      return;
    }
    this.registerService.CreateUser(form.value.email, form.value.firstname, form.value.lastname, form.value.phone, form.value.password, form.value.passwordconf);
  }

}
