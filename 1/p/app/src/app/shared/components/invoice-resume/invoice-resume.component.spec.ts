import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InvoiceResumeComponent } from './invoice-resume.component';

describe('InvoiceResumeComponent', () => {
  let component: InvoiceResumeComponent;
  let fixture: ComponentFixture<InvoiceResumeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InvoiceResumeComponent]
    });
    fixture = TestBed.createComponent(InvoiceResumeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
