import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiceOrdersResumeComponent } from './service-orders-resume.component';

describe('ServiceOrdersResumeComponent', () => {
  let component: ServiceOrdersResumeComponent;
  let fixture: ComponentFixture<ServiceOrdersResumeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ServiceOrdersResumeComponent]
    });
    fixture = TestBed.createComponent(ServiceOrdersResumeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
