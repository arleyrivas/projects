import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdministrationSecondPasswordComponent } from './administration-second-password.component';

describe('AdministrationSecondPasswordComponent', () => {
  let component: AdministrationSecondPasswordComponent;
  let fixture: ComponentFixture<AdministrationSecondPasswordComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdministrationSecondPasswordComponent]
    });
    fixture = TestBed.createComponent(AdministrationSecondPasswordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
