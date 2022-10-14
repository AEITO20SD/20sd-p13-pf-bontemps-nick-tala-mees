import { Component } from '@angular/core';

@Component({
  selector: 'app-account-verified-page',
  templateUrl: './account-verified-page.component.html',
})
export class AccountVerifiedPageComponent {

  title: string = 'Vertification complete';
  message: string = 'You can now log in to the application.';
  image: string = '../../../../../assets/svg/verified.svg';
  account: string = 'Proceed to ';
  link: string = '/login';
  link_name: string = 'Login';

}
