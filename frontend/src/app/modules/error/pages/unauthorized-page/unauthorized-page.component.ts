import { Component } from '@angular/core';

@Component({
  selector: 'app-unauthorized-page',
  templateUrl: './unauthorized-page.component.html',
})
export class UnauthorizedPageComponent {

  title: string = '401 error - Unauthorized';
  message: string = 'You don\'t have permission to access this page.';
  image: string = '../../../../../assets/svg/denied.svg';
  account: string = 'Return to ';
  link: string = '/';
  link_name: string = 'Home';

}
