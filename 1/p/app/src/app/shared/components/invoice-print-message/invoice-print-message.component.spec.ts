import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InvoicePrintMessageComponent } from './invoice-print-message.component';

describe('InvoicePrintMessageComponent', () => {
  let component: InvoicePrintMessageComponent;
  let fixture: ComponentFixture<InvoicePrintMessageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InvoicePrintMessageComponent]
    });
    fixture = TestBed.createComponent(InvoicePrintMessageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
