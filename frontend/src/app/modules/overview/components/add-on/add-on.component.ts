import { Component, Input, OnInit } from '@angular/core';
import { waitForAsync } from '@angular/core/testing';
import { ActivatedRoute } from '@angular/router';
import { AddOnModel } from '../../models/addon.model';
import { CategoryService } from '../../services/category.service';

@Component({
  selector: 'app-add-on',
  templateUrl: './add-on.component.html',
  styleUrls: ['./add-on.component.css']
})
export class AddOnComponent implements OnInit {

  @Input() public id: number = 0;

  public addons: AddOnModel[] = [];
  public addonArray: AddOnModel[] = [];
  public tableNumber: any;

  constructor(private categoryService: CategoryService, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.tableNumber = this.activatedRoute.snapshot.params['table'];
    this.categoryService.getAddOns(this.id).subscribe((response: AddOnModel[]) => {
      this.addons = response;
    });
  }

  public async onClick(_id: number, _name: string, _price: number): Promise<void> {
    this.addonArray.push(({
      id: _id,
      name: _name,
      price: _price
    } as AddOnModel));
    await this.categoryService.storeAddOns({id: _id, name: _name, price: _price, tableId: this.tableNumber});

    setTimeout(() => {
      this.categoryService.obeserver.next(true);
    }, 1000);
  }
}
