import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdministrationNotificationComponent } from './administration-notification.component';

describe('AdministrationNotificationComponent', () => {
  let component: AdministrationNotificationComponent;
  let fixture: ComponentFixture<AdministrationNotificationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdministrationNotificationComponent]
    });
    fixture = TestBed.createComponent(AdministrationNotificationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
