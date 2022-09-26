import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-reset-send',
  templateUrl: './reset-send.component.html',
  styleUrls: ['./reset-send.component.css']
})
export class ResetSendComponent {

  title = 'Recovery email send';
  message = 'Please check your email';
  image = '../../../../assets/svg/vertification.svg';
  account = 'Go back to the';
}
