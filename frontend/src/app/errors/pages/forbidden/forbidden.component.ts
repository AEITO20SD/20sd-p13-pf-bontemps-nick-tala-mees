import { Component } from '@angular/core';

@Component({
  selector: 'app-forbidden',
  templateUrl: './forbidden.component.html'
})
export class ForbiddenComponent  {

  constructor() { }

  title = '403 error - Forbidden';
  message = 'You don\'t have permission to access this page.';
  image = '../../../../assets/svg/denied.svg';
  account = 'Return to ';
  link = '/';
  link_name = 'Home';

}
