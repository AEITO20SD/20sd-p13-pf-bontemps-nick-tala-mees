import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-reservering',
  templateUrl: './reservering.component.html',
  styleUrls: ['./reservering.component.css']
})
export class ReserveringComponent implements OnInit {

  constructor(private activatedRoute: ActivatedRoute) { }

  id: any;

  ngOnInit(): void {
    this.id = this.activatedRoute.snapshot.params['id'];
  }

}
