import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent {

  @Input() number: number | undefined;
  @Input() size: string | undefined;
  @Input() shape: string | undefined;

}
