import { Component, OnInit } from '@angular/core';
import { faAngleLeft } from '@fortawesome/free-solid-svg-icons';
import { Router } from '@angular/router';

@Component({
  selector: 'app-app-bar',
  templateUrl: './app-bar.component.html',
  styleUrls: ['./app-bar.component.css']
})
export class AppBarComponent {

  constructor(private router: Router) { }

  public faAngleLeft: any = faAngleLeft;

  goBack(): void {
    this.router.navigate(['/restaurant/overview']);
  }

}
