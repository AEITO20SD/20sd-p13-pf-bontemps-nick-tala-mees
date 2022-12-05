import { Component } from '@angular/core';

@Component({
  selector: 'app-vertification-email-page',
  templateUrl: './vertification-email-page.component.html'
})
export class VertificationEmailPageComponent {

  title: string = 'Vertification email send';
  message: string = 'Please check your email';
  image: string = '../../../../../assets/svg/vertification.svg';
  account: string = 'Already have an account? ';
  link: string = '/login';
  link_name: string = 'Login';

}
