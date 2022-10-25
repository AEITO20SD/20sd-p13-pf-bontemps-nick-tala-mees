import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReservationOverviewSlideComponent } from './reservation-overview-slide.component';

describe('ReservationOverviewSlideComponent', () => {
  let component: ReservationOverviewSlideComponent;
  let fixture: ComponentFixture<ReservationOverviewSlideComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReservationOverviewSlideComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReservationOverviewSlideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
