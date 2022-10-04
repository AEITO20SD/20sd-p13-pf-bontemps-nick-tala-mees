import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NgForm } from '@angular/forms';
import { ResetFormService } from '../../services/reset-form.service';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-reset-form',
  templateUrl: './reset-form.component.html',
  styleUrls: ['./reset-form.component.css']
})
export class ResetFormComponent implements OnInit {

  constructor(private activatedRoute: ActivatedRoute, private authService: AuthService) { }

  public error: any = "";

  // Emoty variables
  id: any;
  uniqueString: any;

  ngOnInit(): void {
    this.id = this.activatedRoute.snapshot.params['id'];
    this.uniqueString = this.activatedRoute.snapshot.params['uniqueString'];

    // Use the service to check if the id and unique string are valid
    this.authService.checkIdAndUniqueString(this.id, this.uniqueString);
  }

  // Function to send the new password to the backend
  onReset(form: NgForm) {


    this.authService.ResetPasswordForm(this.id, this.uniqueString, form.value.password, form.value.password_conf);

    // Timer that waits for the response from the backend
    setTimeout(() => {
      this.error = this.authService.getErrorMessage();
    }, 250);

  }
}
