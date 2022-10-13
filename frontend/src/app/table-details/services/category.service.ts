import { Injectable } from "@angular/core";
import { CategoryRepository } from "../repositories/category.repository";
import { ICategoryService} from "../interfaces/ICategory.service";

@Injectable({providedIn: "root"})
export class CategoryService implements ICategoryService {

  constructor(private categoryRepository: CategoryRepository) { }

  getCategories(): any {
    return this.categoryRepository.getCategories();
  }
}
