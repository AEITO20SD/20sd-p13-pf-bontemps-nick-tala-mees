import { Component, OnInit } from '@angular/core';
import { CategoryService } from '../../services/category.service';

@Component({
  selector: 'app-receipt',
  templateUrl: './receipt.component.html',
  styleUrls: ['./receipt.component.css']
})
export class ReceiptComponent implements OnInit {

  public observer: any;
  public addOns: any;

  constructor(private categoryServcie: CategoryService) {
    this.categoryServcie.obeserver.subscribe((response: boolean) => {
      this.observer = response;
      if(response === true){
        this.getStoredAddOns();
        this.observer = false;
      }
    });
  }

  public getStoredAddOns(): any {
    this.categoryServcie.getStoredAddOns().subscribe((response: any) => {
      this.addOns = response;
    });
  }

  ngOnInit(): void {
    this.getStoredAddOns();
  }

}
