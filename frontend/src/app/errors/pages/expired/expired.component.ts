import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-expired',
  templateUrl: './expired.component.html',
})
export class ExpiredComponent {

  title = '410 error - Gone';
  message = 'Your link has expired. Please request a new one.';
  image = '../../../../assets/svg/denied.svg';
  account = 'Request a new link ';
  link = '/login/reset-password';
  link_name = 'Request';

}
