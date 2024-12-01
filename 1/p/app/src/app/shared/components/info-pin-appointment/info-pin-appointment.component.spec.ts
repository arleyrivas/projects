import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoPinAppointmentComponent } from './info-pin-appointment.component';

describe('InfoPinAppointmentComponent', () => {
  let component: InfoPinAppointmentComponent;
  let fixture: ComponentFixture<InfoPinAppointmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InfoPinAppointmentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InfoPinAppointmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
