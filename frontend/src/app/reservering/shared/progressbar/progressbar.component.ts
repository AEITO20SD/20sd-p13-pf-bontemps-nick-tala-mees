import { Component, EventEmitter, Input, OnInit,Output } from '@angular/core';

@Component({
  selector: 'app-progressbar',
  templateUrl: './progressbar.component.html',
  styleUrls: ['./progressbar.component.css']
})
export class ProgressbarComponent implements OnInit {

  constructor() { }
  ngOnInit(): void {
  }
  @Input()
  index: number = 1;

  previous1: boolean = false;
  previous2: boolean = false;
  previous3: boolean = false;
  previous4: boolean = false;

  active1: boolean = false;
  active2: boolean = false;
  active3: boolean = false;
  active4: boolean = false;





}

