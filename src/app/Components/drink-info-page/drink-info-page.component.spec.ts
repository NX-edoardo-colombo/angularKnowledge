import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DrinkInfoPageComponent } from './drink-info-page.component';

describe('DrinkInfoPageComponent', () => {
  let component: DrinkInfoPageComponent;
  let fixture: ComponentFixture<DrinkInfoPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DrinkInfoPageComponent]
    });
    fixture = TestBed.createComponent(DrinkInfoPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
