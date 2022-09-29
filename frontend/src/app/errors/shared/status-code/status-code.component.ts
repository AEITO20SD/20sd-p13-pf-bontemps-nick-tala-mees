import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-status-code',
  templateUrl: './status-code.component.html',
  styleUrls: ['./status-code.component.css']
})
export class StatusCodeComponent {

  constructor() { }

  @Input() title: string | undefined;
  @Input() message: string | undefined;
  @Input() image: string | undefined;
  @Input() account: string | undefined;
  @Input() link: string | undefined;
  @Input() link_name: string | undefined;
}
