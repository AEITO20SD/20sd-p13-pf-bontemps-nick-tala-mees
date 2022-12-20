import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CategoryService } from '../../services/category.service';

@Component({
  selector: 'app-receipt',
  templateUrl: './receipt.component.html',
  styleUrls: ['./receipt.component.css']
})
export class ReceiptComponent implements OnInit {

  public observer: any;
  public addOns: any;
  public tableId: any;

  constructor(private categoryServcie: CategoryService, private activatedRoute: ActivatedRoute) {
    this.categoryServcie.obeserver.subscribe((response: boolean) => {
      this.observer = response;
      if(response === true){
        this.getStoredAddOns();
        this.observer = false;
      }
    });
  }

  ngOnInit(): void {
    this.tableId = this.activatedRoute.snapshot.params['table'];
    this.getStoredAddOns();
  }

  public getStoredAddOns(): any {
    this.categoryServcie.getStoredAddOns(this.tableId).subscribe((response: any) => {
      this.addOns = response;
    });
  }

}
