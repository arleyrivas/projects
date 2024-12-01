import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdministrationProfilePhoneComponent } from './administration-profile-phone.component';

describe('AdministrationProfilePhoneComponent', () => {
  let component: AdministrationProfilePhoneComponent;
  let fixture: ComponentFixture<AdministrationProfilePhoneComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdministrationProfilePhoneComponent]
    });
    fixture = TestBed.createComponent(AdministrationProfilePhoneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
