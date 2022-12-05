import { TestBed } from '@angular/core/testing';

import { BaseRepository } from './base.repository';

describe('BaseRepositorieService', () => {
  let service: BaseRepository;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BaseRepository);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
