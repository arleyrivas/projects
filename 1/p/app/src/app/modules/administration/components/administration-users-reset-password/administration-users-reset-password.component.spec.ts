import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdministrationUsersResetPasswordComponent } from './administration-users-reset-password.component';

describe('AdministrationUsersResetPasswordComponent', () => {
  let component: AdministrationUsersResetPasswordComponent;
  let fixture: ComponentFixture<AdministrationUsersResetPasswordComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdministrationUsersResetPasswordComponent]
    });
    fixture = TestBed.createComponent(AdministrationUsersResetPasswordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
