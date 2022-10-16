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

  constructor(private categoryService: CategoryService) { }

  ngOnInit(): void {
    console.log(this.id);

    this.categoryService.getAddOns(this.id).subscribe((response: AddOnModel[]) => {
      this.addons = response;
      console.log(this.addons);
    });

  }

}
