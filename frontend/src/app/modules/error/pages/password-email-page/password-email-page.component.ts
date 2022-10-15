import { Component } from '@angular/core';

@Component({
  selector: 'app-password-email-page',
  templateUrl: './password-email-page.component.html',
})
export class PasswordEmailPageComponent {

  title: string = 'Recovery email send';
  message: string = 'Please check your email';
  image: string = '../../../../../assets/svg/vertification.svg';
  account: string = 'Go back to the  ';
  link: string = '/login';
  link_name: string = 'Login';

}
