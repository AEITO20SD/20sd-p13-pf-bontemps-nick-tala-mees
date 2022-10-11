import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-password-email',
  templateUrl: './password-email.component.html'
})
export class PasswordEmailComponent {

  title = 'Recovery email send';
  message = 'Please check your email';
  image = '../../../../assets/svg/vertification.svg';
  account = 'Go back to the  ';
  link = '/login';
  link_name = 'Login';
}
