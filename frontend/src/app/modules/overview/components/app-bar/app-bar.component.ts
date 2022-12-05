import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { faAngleLeft } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-app-bar',
  templateUrl: './app-bar.component.html',
  styleUrls: ['./app-bar.component.css']
})
export class AppBarComponent {

  constructor(private router: Router) { }

  public faAngleLeft: any = faAngleLeft;

  public goBack(): void {
    this.router.navigate(['/restaurant/overview']);
  }

}
