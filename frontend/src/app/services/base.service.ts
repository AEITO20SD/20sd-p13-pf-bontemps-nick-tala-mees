import { Injectable } from '@angular/core';
import { IBase } from '../interfaces/ibase.service';

@Injectable({
  providedIn: 'root'
})
export class BaseService implements IBase{

  constructor() { }

  getAll(url: string, object: any) {
    throw new Error('Method not implemented.');
  }
  getOne(url: string, object: any, identifier: any) {
    throw new Error('Method not implemented.');
  }
  create(url: string, object: any) {
    throw new Error('Method not implemented.');
  }
  update(url: string, object: any) {
    throw new Error('Method not implemented.');
  }
  delete(url: string, object: any) {
    throw new Error('Method not implemented.');
  }
}
