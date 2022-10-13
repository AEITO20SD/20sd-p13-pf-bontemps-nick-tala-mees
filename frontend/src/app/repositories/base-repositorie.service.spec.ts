import { TestBed } from '@angular/core/testing';

import { BaseRepositorie } from './base.repositorie';

describe('BaseRepositorieService', () => {
  let service: BaseRepositorie;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BaseRepositorie);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
