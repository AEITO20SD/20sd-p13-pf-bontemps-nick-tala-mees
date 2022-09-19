import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'login-page-component',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.css']
})
export class PageComponent implements OnInit {

  constructor() { }

  // varaibles for the first child input component
  placeholder = 'BonTemps@example.com';
  type = 'text';
  name = 'email';

  // varaibles for the second child input component
  placeholder_pass = 'Password';
  type_pass = 'password';
  name_pass = 'password';

  ngOnInit(): void {
  }

}
