import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Category } from '../../models/category.model';
import { CategoryService } from '../../services/category.service';

@Component({
  selector: 'app-table-details',
  templateUrl: './table-details.component.html',
  styleUrls: ['./table-details.component.css']
})
export class TableDetailsComponent implements OnInit {

  constructor(private categoryService: CategoryService, private router: Router, private activatedRoute: ActivatedRoute ) {
     this.router.routeReuseStrategy.shouldReuseRoute = () => false;
  }

  public categories: Category[] = [];
  public id: number | undefined;
  public uniqueString: string | undefined;
  public tableNumber: number | undefined;

  // Function that triggers when the component is initialized and calls the service to get the data
  ngOnInit(): void {
    this.uniqueString = this.activatedRoute.snapshot.params['uniqueString'];
    this.tableNumber = this.activatedRoute.snapshot.params['table'];
    this.id = this.activatedRoute.snapshot.params['id'];

    this.categoryService.getCategories().subscribe((response: Category[]) => {
      this.categories = response;
    });
  }

  onClick(id: number): void {
    this.router.navigate(['/restaurant/overview/details/' + this.tableNumber + '/' + this.uniqueString + '/' + id]);
  }

}
