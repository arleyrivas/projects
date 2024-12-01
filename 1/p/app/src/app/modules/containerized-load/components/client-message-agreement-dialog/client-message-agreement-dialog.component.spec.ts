import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientMessageAgreementDialogComponent } from './client-message-agreement-dialog.component';

describe('ClientMessageAgreementDialogComponent', () => {
  let component: ClientMessageAgreementDialogComponent;
  let fixture: ComponentFixture<ClientMessageAgreementDialogComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ClientMessageAgreementDialogComponent]
    });
    fixture = TestBed.createComponent(ClientMessageAgreementDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
