import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-send',
  templateUrl: './send.component.html',
  styleUrls: ['./send.component.css']
})
export class SendComponent implements OnInit {

  // Variables to display in the frontend
  title = 'Vertification email send';
  message = 'Please check your email';
  image = '../../../../assets/svg/vertification.svg';
  account = 'Already have an account? '

  constructor() { }

  ngOnInit(): void {
  }

}
