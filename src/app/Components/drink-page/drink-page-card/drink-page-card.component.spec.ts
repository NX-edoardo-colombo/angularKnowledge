import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DrinkPageCardComponent } from './drink-page-card.component';

describe('DrinkPageCardComponent', () => {
  let component: DrinkPageCardComponent;
  let fixture: ComponentFixture<DrinkPageCardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DrinkPageCardComponent]
    });
    fixture = TestBed.createComponent(DrinkPageCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
