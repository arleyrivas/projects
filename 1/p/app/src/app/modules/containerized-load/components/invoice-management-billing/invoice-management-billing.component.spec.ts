import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InvoiceManagementBillingComponent } from './invoice-management-billing.component';

describe('InvoiceManagementBillingComponent', () => {
  let component: InvoiceManagementBillingComponent;
  let fixture: ComponentFixture<InvoiceManagementBillingComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InvoiceManagementBillingComponent]
    });
    fixture = TestBed.createComponent(InvoiceManagementBillingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
