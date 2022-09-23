import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-verified',
  templateUrl: './verified.component.html',
  styleUrls: ['./verified.component.css']
})
export class VerifiedComponent implements OnInit {

  // Variables to display in the frontend
  title = 'Email Verified';
  message = 'Your email has been verified.';
  image = '../../../../assets/svg/verified.svg';
  account = 'proceed to '

  constructor() { }

  ngOnInit(): void {
  }

}
