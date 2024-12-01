import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InvoiceManagementComponent } from './invoice-management.component';

describe('InvoiceManagementComponent', () => {
  let component: InvoiceManagementComponent;
  let fixture: ComponentFixture<InvoiceManagementComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InvoiceManagementComponent]
    });
    fixture = TestBed.createComponent(InvoiceManagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
