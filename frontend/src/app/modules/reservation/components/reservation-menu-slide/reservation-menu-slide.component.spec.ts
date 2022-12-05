import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReservationMenuSlideComponent } from './reservation-menu-slide.component';

describe('ReservationMenuSlideComponent', () => {
  let component: ReservationMenuSlideComponent;
  let fixture: ComponentFixture<ReservationMenuSlideComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReservationMenuSlideComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReservationMenuSlideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
