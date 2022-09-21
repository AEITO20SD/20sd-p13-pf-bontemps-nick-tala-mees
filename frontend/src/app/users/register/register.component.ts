import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor() { }

  // varaibles for the first child input component
  placeholder_email = 'bontemps@example.com';
  type_email = 'text';
  name_email = 'email';

  // varaibles for the second child input component
  placeholder_firstname = 'firstname';
  type_firstname = 'firstname';
  name_firstname = 'firstname';

  // varaibles for the third child input component
  placeholder_lastname = 'last name';
  type_lastname = 'lastname';
  name_lastname = 'lastname';

  // varaibles for the fourth child input component
  placeholder_phone = 'phone number';
  type_phone = 'phone';
  name_phone = 'phone';

  // varaibles for the fifth child input component
  placeholder_pass = 'password';
  type_pass = 'password';
  name_pass = 'password';

  // varaibles for the sixt child input component
  placeholder_passconf = 'confirm password';
  type_passconf = 'passwordconf';
  name_passconf = 'passwordconf';

  ngOnInit(): void {
  }

}
