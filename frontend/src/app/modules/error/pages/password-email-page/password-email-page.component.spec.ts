import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PasswordEmailPageComponent } from './password-email-page.component';

describe('PasswordEmailPageComponent', () => {
  let component: PasswordEmailPageComponent;
  let fixture: ComponentFixture<PasswordEmailPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PasswordEmailPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PasswordEmailPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
