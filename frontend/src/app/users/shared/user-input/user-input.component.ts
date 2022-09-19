import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-user-input',
  templateUrl: './user-input.component.html',
  styleUrls: ['./user-input.component.css']
})
export class UserInputComponent implements OnInit {

  constructor() { }

  @Input() placeholder: string | undefined;
  @Input() type: string | undefined;
  @Input() name: string | undefined;

  ngOnInit(): void {
  }

}
