import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-register-page',
  templateUrl: './register-page.component.html',
  styleUrls: ['./register-page.component.css']
})
export class RegisterPageComponent {

  constructor(private authService: AuthService) { }

  public error: string = "";

  public onSubmit(form: NgForm): void {
    this.authService.createUser(form.value.email, form.value.firstname, form.value.lastname, form.value.phone, form.value.password, form.value.passwordconf);

    setTimeout(() => {
      this.error = this.authService.getErrorMessage();
    }, 250);
  }

}
