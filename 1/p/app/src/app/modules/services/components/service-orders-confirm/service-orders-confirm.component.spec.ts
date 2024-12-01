import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiceOrdersConfirmComponent } from './service-orders-confirm.component';

describe('ServiceOrdersConfirmComponent', () => {
  let component: ServiceOrdersConfirmComponent;
  let fixture: ComponentFixture<ServiceOrdersConfirmComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ServiceOrdersConfirmComponent]
    });
    fixture = TestBed.createComponent(ServiceOrdersConfirmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
