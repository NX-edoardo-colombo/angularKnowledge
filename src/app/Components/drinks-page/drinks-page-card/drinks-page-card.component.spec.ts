import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DrinksPageCardComponent } from './drinks-page-card.component';

describe('DrinkPageCardComponent', () => {
  let component: DrinksPageCardComponent;
  let fixture: ComponentFixture<DrinksPageCardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DrinksPageCardComponent]
    });
    fixture = TestBed.createComponent(DrinksPageCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
