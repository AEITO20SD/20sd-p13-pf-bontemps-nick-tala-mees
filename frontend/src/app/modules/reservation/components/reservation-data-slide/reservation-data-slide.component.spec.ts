import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReservationDataSlideComponent } from './reservation-data-slide.component';

describe('ReservationDataSlideComponent', () => {
  let component: ReservationDataSlideComponent;
  let fixture: ComponentFixture<ReservationDataSlideComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReservationDataSlideComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReservationDataSlideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
