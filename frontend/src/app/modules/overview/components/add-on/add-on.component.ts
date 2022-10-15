import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-on',
  templateUrl: './add-on.component.html',
  styleUrls: ['./add-on.component.css']
})
export class AddOnComponent implements OnInit {

  @Input() public id: number | undefined;

  constructor() { }

  ngOnInit(): void {
    console.log(this.id);
  }

}
