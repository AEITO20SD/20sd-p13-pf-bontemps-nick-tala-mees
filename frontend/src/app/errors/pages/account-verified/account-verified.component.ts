import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-account-verified',
  templateUrl: './account-verified.component.html',
})
export class AccountVerifiedComponent {

  title = 'Vertification complete';
  message = 'You can now log in to the application.';
  image = '../../../../assets/svg/verified.svg';
  account = 'Proceed to ';
  link = '/login';
  link_name = 'Login';
}
