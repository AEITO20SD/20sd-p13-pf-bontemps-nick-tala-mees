import { Injectable } from "@angular/core";
import { of } from "rxjs";
import { ReservationModel } from "../models/reservation.model";
import { ICategoryService } from "./icategory.service";

@Injectable({providedIn: "root"})
export class MockCategoryService implements ICategoryService {

  constructor() { }
  getStoredAddOns(tableId: number): any {
    throw new Error("Method not implemented.");
  }
  public obeserver: any;

  public storeAddOns(addOns: any) {
    throw new Error("Method not implemented.");
  }

  public getAddOns(categoryId: number) {
    return of([
      {
        id: 1,
        name: "AddOn 1",
        price: "2.70",
        color:"red"
      },
      {
        id: 2,
        name: "AddOn 2",
        price: "3.70",
        color: "red"
      },
      {
        id: 3,
        name: "AddOn 3",
        price: "5.70",
        color:"red"
      },
      {
        id: 4,
        name: "AddOn 4",
        price: "2.70",
        color:"red"
      },
      {
        id: 5,
        name: "AddOn 5",
        price: "2.70",
        color:"red"
      },
      {
        id: 6,
        name: "AddOn 6",
        price: "2.70",
        color:"red"
      },
      {
        id: 7,
        name: "AddOn 7",
        price: "2.70",
        color: "yellow"
      },
    ]);
  }

  public getCategories(): any {
    return of([
      {
        id: 1,
        name: "Category 1"
      },
      {
        id: 2,
        name: "Category 2"
      },
      {
        id: 3,
        name: "Category 3"
      },
      {
        id: 4,
        name: "Category 4"
      },
      {
        id: 5,
        name: "Category 5"
      },
      {
        id: 6,
        name: "Category 6"
      },
    ]);
  }

  public getUniqueString(tableId: number): any {
    const object = [{
      id: 1,
      guestAmount: 2,
      uniqueString: '123456789',
      dateOfCreation: '2021-01-01',
      dateOfReservation: '2021-01-01',
    }];

    return object;
  }
}
