import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ResetService } from '../../services/reset.service';

@Component({
  selector: 'app-reset',
  templateUrl: './reset.component.html',
  styleUrls: ['./reset.component.css']
})
export class ResetComponent {

  constructor(public resetService: ResetService) { }

  onReset(form: NgForm) {

    // Calls the service to send the data to the backend
    this.resetService.ResetPassword(form.value.email);
  }

}
