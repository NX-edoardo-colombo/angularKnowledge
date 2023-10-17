import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DrinkPageTableComponent } from './drink-page-table.component';

describe('DrinkPageTableComponent', () => {
  let component: DrinkPageTableComponent;
  let fixture: ComponentFixture<DrinkPageTableComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DrinkPageTableComponent]
    });
    fixture = TestBed.createComponent(DrinkPageTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
