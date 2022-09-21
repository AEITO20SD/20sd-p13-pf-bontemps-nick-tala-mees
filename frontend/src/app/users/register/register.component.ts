import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor() { }

  // varaibles for the first child input component
  placeholder_email = 'BonTemps@example.com';
  type_email = 'text';
  name_email = 'email';

  // varaibles for the second child input component
  placeholder_firstname = 'firstname';
  type_firstname = 'firstname';
  name_firstname = 'firstname';

  // varaibles for the second child input component
  placeholder_secondname = 'secondname';
  type_secondname = 'secondname';
  name_secondname = 'secondname';

  // varaibles for the second child input component
  placeholder_pass = 'Password';
  type_pass = 'password';
  name_pass = 'password';

  ngOnInit(): void {
  }

}
