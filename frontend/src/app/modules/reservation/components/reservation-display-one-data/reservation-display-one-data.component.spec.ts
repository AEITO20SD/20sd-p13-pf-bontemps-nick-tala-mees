import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReservationDisplayOneDataComponent } from './reservation-display-one-data.component';

describe('ReservationDisplayOneDataComponent', () => {
  let component: ReservationDisplayOneDataComponent;
  let fixture: ComponentFixture<ReservationDisplayOneDataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ReservationDisplayOneDataComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReservationDisplayOneDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
