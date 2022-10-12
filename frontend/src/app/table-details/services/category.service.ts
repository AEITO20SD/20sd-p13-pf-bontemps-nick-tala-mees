import { Injectable } from "@angular/core";
import { CategoryRepository } from "../repositories/category.repository";

@Injectable({providedIn: "root"})
export class CategoryService {

  constructor(private categoryRepository: CategoryRepository) { }

  getCategories() {
    return this.categoryRepository.getCategories();
  }
}
