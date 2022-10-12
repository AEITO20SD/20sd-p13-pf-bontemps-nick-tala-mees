import { Component, OnInit } from '@angular/core';
import { Category } from '../../models/category.model';
import { CategoryService } from '../../services/category.service';
import { faWineBottle, faMartiniGlassCitrus } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {

  constructor(private categoryService: CategoryService) { }

  public categories: Category[] = [];
  public icon: any = faWineBottle;

  // Function that triggers when the component is initialized and calls the service to get the data
  ngOnInit(): void {
    this.categoryService.getCategories().subscribe((response) => {
      this.categories = response;
    });
  }

  faWineBottle = faWineBottle;
  faMartiniGlassCitrus = faMartiniGlassCitrus;
}
