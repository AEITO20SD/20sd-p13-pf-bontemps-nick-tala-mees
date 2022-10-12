import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent {

  constructor(private router: Router) { }

  @Input() number: number | undefined;
  @Input() size: string | undefined;
  @Input() shape: string | undefined;

  redirect(number: number | undefined) {
    const uniqueString: string = '/1234567890';
    this.router.navigate(['/restaurant/overview/details/' + number + uniqueString]);
  }
}
