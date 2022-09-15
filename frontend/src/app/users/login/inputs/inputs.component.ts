import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-login-inputs',
  templateUrl: './inputs.component.html',
  styleUrls: ['./inputs.component.css']
})
export class InputsComponent implements OnInit {
  constructor() { }

  @Input() placeholder: string | undefined;
  @Input() type: string | undefined;
  @Input() name: string | undefined;

  ngOnInit(): void {
  }

}
