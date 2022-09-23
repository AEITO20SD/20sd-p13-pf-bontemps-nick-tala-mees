import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-success',
  templateUrl: './success.component.html',
  styleUrls: ['./success.component.css']
})
export class SuccessComponent implements OnInit {

  @Input() title: string | undefined;
  @Input() message: string | undefined;
  @Input() image: string | undefined;
  @Input() account: string | undefined;

  constructor() { }

  ngOnInit(): void {
  }

}
