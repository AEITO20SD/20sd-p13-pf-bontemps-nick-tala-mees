import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-reset',
  templateUrl: './reset.component.html',
  styleUrls: ['./reset.component.css']
})
export class ResetComponent {

  constructor(public authService: AuthService) { }

  public error: any = "";

  onReset(form: NgForm) {

    // Calls the service to send the data to the backend
    this.authService.ResetPassword(form.value.email);

    // Timer that waits for the response from the backend
    setTimeout(() => {
      this.error = this.authService.getErrorMessage();
    }, 250);
  }

}
