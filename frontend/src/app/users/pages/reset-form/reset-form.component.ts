import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-reset-form',
  templateUrl: './reset-form.component.html',
  styleUrls: ['./reset-form.component.css']
})
export class ResetFormComponent implements OnInit {

  constructor(private activatedRoute: ActivatedRoute) { }

  id: any;
  ngOnInit(): void {
    this.id = this.activatedRoute.snapshot.params;
    console.log(this.id);
  }
}
