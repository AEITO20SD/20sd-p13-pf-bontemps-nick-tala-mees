import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-error',
  templateUrl: './error.component.html',
  styleUrls: ['./error.component.css']
})
export class ErrorComponent {

  constructor() { }

  @Input() title: string | undefined;
  @Input() message: string | undefined;
  @Input() image: string | undefined;
  @Input() account: string | undefined;
  @Input() link: string | undefined;
  @Input() link_name: string | undefined;

}
