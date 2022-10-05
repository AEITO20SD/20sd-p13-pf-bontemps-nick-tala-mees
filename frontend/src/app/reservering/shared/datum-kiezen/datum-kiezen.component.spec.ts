import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DatumKiezenComponent } from './datum-kiezen.component';

describe('DatumKiezenComponent', () => {
  let component: DatumKiezenComponent;
  let fixture: ComponentFixture<DatumKiezenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DatumKiezenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DatumKiezenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
