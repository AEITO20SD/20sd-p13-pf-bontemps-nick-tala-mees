import { Injectable } from '@angular/core';
import { IBase } from '../interfaces/ibase.service';

@Injectable({
  providedIn: 'root'
})
export class BaseService implements IBase{

  constructor() { }
}
