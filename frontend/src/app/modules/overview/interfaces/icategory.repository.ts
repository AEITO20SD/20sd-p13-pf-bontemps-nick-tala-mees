export interface ICategoryRepository {
  getCategories(): any;
  getAddOns(categoryId: number): any;
}
