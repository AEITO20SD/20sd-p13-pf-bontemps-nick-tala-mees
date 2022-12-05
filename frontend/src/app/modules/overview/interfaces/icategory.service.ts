export interface ICategoryService {
  getCategories(): any;
  getAddOns(categoryId: number): any;
  getUniqueString(tableId: number): string;
}
