import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

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
