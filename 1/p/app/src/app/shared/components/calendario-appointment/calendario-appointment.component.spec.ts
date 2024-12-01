import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CalendarioAppointmentComponent } from './calendario-appointment.component';

describe('CalendarioAppointmentComponent', () => {
  let component: CalendarioAppointmentComponent;
  let fixture: ComponentFixture<CalendarioAppointmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CalendarioAppointmentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CalendarioAppointmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
