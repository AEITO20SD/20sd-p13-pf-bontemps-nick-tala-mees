import { Component } from '@angular/core';

@Component({
  selector: 'app-forbidden-page',
  templateUrl: './forbidden-page.component.html'
})
export class ForbiddenPageComponent {

  title: string = '403 error - Forbidden';
  message: string = 'You don\'t have permission to access this page.';
  image: string = '../../../../../assets/svg/denied.svg';
  account: string = 'Return to ';
  link: string = '/';
  link_name: string = 'Home';

}
