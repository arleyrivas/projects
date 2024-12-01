import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreditNotesConfirmComponent } from './credit-notes-confirm.component';

describe('CreditNotesConfirmComponent', () => {
  let component: CreditNotesConfirmComponent;
  let fixture: ComponentFixture<CreditNotesConfirmComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreditNotesConfirmComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreditNotesConfirmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
