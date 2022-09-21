import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReserverenComponent } from './reserveren.component';

describe('ReserverenComponent', () => {
  let component: ReserverenComponent;
  let fixture: ComponentFixture<ReserverenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReserverenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReserverenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
