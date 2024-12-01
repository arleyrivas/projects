import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdministrationNotificationSelectedComponent } from './administration-notification-selected.component';

describe('AdministrationNotificationSelectedComponent', () => {
  let component: AdministrationNotificationSelectedComponent;
  let fixture: ComponentFixture<AdministrationNotificationSelectedComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdministrationNotificationSelectedComponent]
    });
    fixture = TestBed.createComponent(AdministrationNotificationSelectedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
