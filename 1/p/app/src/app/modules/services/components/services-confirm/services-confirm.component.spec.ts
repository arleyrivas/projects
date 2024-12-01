import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServicesConfirmComponent } from './services-confirm.component';

describe('ServicesConfirmComponent', () => {
  let component: ServicesConfirmComponent;
  let fixture: ComponentFixture<ServicesConfirmComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ServicesConfirmComponent]
    });
    fixture = TestBed.createComponent(ServicesConfirmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
