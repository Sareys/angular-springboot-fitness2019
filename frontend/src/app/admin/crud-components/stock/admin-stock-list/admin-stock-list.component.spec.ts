import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminStockListComponent } from './admin-stock-list.component';

describe('AdminStockListComponent', () => {
  let component: AdminStockListComponent;
  let fixture: ComponentFixture<AdminStockListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminStockListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminStockListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
