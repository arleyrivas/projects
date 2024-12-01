import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InvoiceBookingManagementBillingComponent } from './invoice-booking-management-billing.component';

describe('InvoiceBookingManagementBillingComponent', () => {
  let component: InvoiceBookingManagementBillingComponent;
  let fixture: ComponentFixture<InvoiceBookingManagementBillingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InvoiceBookingManagementBillingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InvoiceBookingManagementBillingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
