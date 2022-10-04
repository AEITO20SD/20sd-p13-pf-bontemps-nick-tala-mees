import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-vertification-email',
  templateUrl: './vertification-email.component.html'
})
export class VertificationEmailComponent {

  title = 'Vertification email send';
  message = 'Please check your email';
  image = '../../../../assets/svg/vertification.svg';
  account = 'Already have an account? ';
  link = '/login';
  link_name = 'Login';
}
