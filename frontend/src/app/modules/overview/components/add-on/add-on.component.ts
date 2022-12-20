import { Component, Input, OnInit } from '@angular/core';
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

  constructor(private categoryService: CategoryService) { }

  ngOnInit(): void {
    this.categoryService.getAddOns(this.id).subscribe((response: AddOnModel[]) => {
      this.addons = response;
    });
  }

  public onClick(_id: number, _name: string, _price: number): void {
    this.addonArray.push(({
      id: _id,
      name: _name,
      price: _price
    } as AddOnModel));
    this.categoryService.storeAddOns({id: _id, name: _name, price: _price});
  }



}
