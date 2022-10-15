import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableOverviewPageComponent } from './table-overview-page.component';

describe('TableOverviewPageComponent', () => {
  let component: TableOverviewPageComponent;
  let fixture: ComponentFixture<TableOverviewPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TableOverviewPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TableOverviewPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
