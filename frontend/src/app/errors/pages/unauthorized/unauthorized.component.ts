import { Component } from '@angular/core';

@Component({
  selector: 'app-unauthorized',
  templateUrl: './unauthorized.component.html'
})
export class UnauthorizedComponent  {

  title = '401 error - Unauthorized';
  message = 'You don\'t have permission to access this page.';
  image = '../../../../assets/svg/denied.svg';
  account = 'Return to ';
  link = '/';
  link_name = 'Home';
}
