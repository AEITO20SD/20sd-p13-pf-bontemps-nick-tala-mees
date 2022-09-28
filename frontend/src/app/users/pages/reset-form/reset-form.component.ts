import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NgForm } from '@angular/forms';
import { ResetFormService } from '../../services/reset-form.service';

@Component({
  selector: 'app-reset-form',
  templateUrl: './reset-form.component.html',
  styleUrls: ['./reset-form.component.css']
})
export class ResetFormComponent implements OnInit {

  constructor(private activatedRoute: ActivatedRoute, private resetFormService: ResetFormService) { }

  Error = "";

  id: any;
  uniqueString: any;
  ngOnInit(): void {
    this.id = this.activatedRoute.snapshot.params['id'];
    this.uniqueString = this.activatedRoute.snapshot.params['uniqueString'];

    // Use the service to check if the id and unique string are valid
    this.resetFormService.checkIdAndUniqueString(this.id, this.uniqueString);
  }

  // Function to send the new password to the backend
  onReset(form: NgForm) {

    //Check if all the fields are filled in
    if(form.value.password == "" || form.value.passwordconf == "") {
      this.Error = "Please enter all fields";
      return;
    }
    // Check if the passwords are the same
    if(form.value.password !== form.value.confirmPassword) {
      this.Error = "Passwords do not match";
      return;
    }
    console.log(form.value);
    console.log(this.id + ' ' + this.uniqueString);
  }
}
