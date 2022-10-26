import { Component, Input, OnInit } from '@angular/core';
import { stringify } from 'querystring';

@Component({
  selector: 'app-progress-bar',
  templateUrl: './progress-bar.component.html',
  styleUrls: ['./progress-bar.component.css']
})
export class ProgressBarComponent implements OnInit {

  constructor() { }

  @Input() currentStep: number = 0;

  public progressWidth: string = "0";

  ngOnInit(): void {
    this.progressWidth = ((this.currentStep - 1) * 33.33).toString() + "%";
    console.log(this.progressWidth);
  }

}
