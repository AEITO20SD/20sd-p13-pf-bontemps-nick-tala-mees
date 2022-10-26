import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReservationDateSlideComponent } from './reservation-date-slide.component';

describe('ReservationDateSlideComponent', () => {
  let component: ReservationDateSlideComponent;
  let fixture: ComponentFixture<ReservationDateSlideComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReservationDateSlideComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReservationDateSlideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
