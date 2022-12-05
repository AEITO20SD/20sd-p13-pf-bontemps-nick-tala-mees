import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfirmPasswordPageComponent } from './confirm-password-page.component';

describe('ConfirmPasswordPageComponent', () => {
  let component: ConfirmPasswordPageComponent;
  let fixture: ComponentFixture<ConfirmPasswordPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConfirmPasswordPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfirmPasswordPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
