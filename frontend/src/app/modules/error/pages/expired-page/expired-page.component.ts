import { Component } from '@angular/core';

@Component({
  selector: 'app-expired-page',
  templateUrl: './expired-page.component.html',
})
export class ExpiredPageComponent {

  title: string = '410 error - Gone';
  message: string = 'Your link has expired. Please request a new one.';
  image: string = '../../../../../assets/svg/denied.svg';
  account: string = 'Request a new link ';
  link: string = '/login/reset-password';
  link_name: string = 'Request';

}
