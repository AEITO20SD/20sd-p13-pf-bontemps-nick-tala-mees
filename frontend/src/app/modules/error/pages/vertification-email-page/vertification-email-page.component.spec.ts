import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VertificationEmailPageComponent } from './vertification-email-page.component';

describe('VertificationEmailPageComponent', () => {
  let component: VertificationEmailPageComponent;
  let fixture: ComponentFixture<VertificationEmailPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VertificationEmailPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VertificationEmailPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
