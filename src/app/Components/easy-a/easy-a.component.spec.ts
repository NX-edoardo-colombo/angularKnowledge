import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EasyAComponent } from './easy-a.component';

describe('EasyAComponent', () => {
  let component: EasyAComponent;
  let fixture: ComponentFixture<EasyAComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EasyAComponent]
    });
    fixture = TestBed.createComponent(EasyAComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
