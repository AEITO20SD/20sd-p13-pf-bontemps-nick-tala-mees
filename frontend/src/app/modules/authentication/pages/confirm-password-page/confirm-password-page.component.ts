import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-confirm-password-page',
  templateUrl: './confirm-password-page.component.html',
})
export class ConfirmPasswordPageComponent implements OnInit {

  constructor(private activatedRoute: ActivatedRoute, private authService: AuthService) { }

  public error: string = "";

  public id: any;
  public uniqueString: any;

  ngOnInit(): void {
    this.id = this.activatedRoute.snapshot.params['id'];
    this.uniqueString = this.activatedRoute.snapshot.params['uniqueString'];

    this.authService.checkIdAndUniqueString(this.id, this.uniqueString);
  }

  // Function that triggers when the form is submitted
  public onSubmit(form: NgForm): void {
    if(form.valid) {
      this.authService.confirmPasswordReset(this.id, this.uniqueString, form.value.password, form.value.passwordconf);
    }

    // Timer that waits for the response from the backend
    setTimeout(() => {
      this.error = this.authService.getErrorMessage();
    }, 250);
  }

}
