import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EasyBComponent } from './easy-b.component';

describe('EasyBComponent', () => {
  let component: EasyBComponent;
  let fixture: ComponentFixture<EasyBComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EasyBComponent]
    });
    fixture = TestBed.createComponent(EasyBComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
