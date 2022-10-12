import { Component, OnInit } from '@angular/core';
import { Category } from '../../models/category.model';
import { CategoryService } from '../../services/category.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {

  constructor(private categoryService: CategoryService) { }

  public data: Category[] = [];

  // Function that triggers when the component is initialized and calls the service to get the data
  ngOnInit(): void {
    this.categoryService.getCategories().subscribe((response) => {
      this.data = response;
      this.getData();
    });
  }

  getData() {
    console.log(this.data);
  }
}
