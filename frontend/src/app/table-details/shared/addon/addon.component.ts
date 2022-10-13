import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-addon',
  templateUrl: './addon.component.html',
  styleUrls: ['./addon.component.css']
})
export class AddonComponent implements OnInit {

  @Input() public id: number | undefined;

  constructor() { }

  ngOnInit(): void {
    console.log(this.id);
  }

}
