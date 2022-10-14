import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-reset-password-page',
  templateUrl: './reset-password-page.component.html',
  styleUrls: ['./reset-password-page.component.css']
})
export class ResetPasswordPageComponent {

  constructor(private authService: AuthService) { }

  public error: string = "";

  // Function that triggers when the form is submitted
  public onSubmit(form: NgForm): void {
    if(form.valid) {
      this.authService.resetPassword(form.value.email);
    }

    // Timer that waits for the response from the backend
    setTimeout(() => {
      this.error = this.authService.getErrorMessage();
    }, 250);
  }

}
