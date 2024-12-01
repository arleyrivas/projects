import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfirmAppointmentMessageComponent } from './confirm-appointment-message.component';

describe('ConfirmAppointmentMessageComponent', () => {
  let component: ConfirmAppointmentMessageComponent;
  let fixture: ComponentFixture<ConfirmAppointmentMessageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConfirmAppointmentMessageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConfirmAppointmentMessageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
