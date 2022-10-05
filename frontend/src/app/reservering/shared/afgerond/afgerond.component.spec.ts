import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AfgerondComponent } from './afgerond.component';

describe('AfgerondComponent', () => {
  let component: AfgerondComponent;
  let fixture: ComponentFixture<AfgerondComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AfgerondComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AfgerondComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
