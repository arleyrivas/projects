import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HistoryAppointmentsComponent } from './history-appointments.component';

describe('HistoryAppointmentsComponent', () => {
  let component: HistoryAppointmentsComponent;
  let fixture: ComponentFixture<HistoryAppointmentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HistoryAppointmentsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HistoryAppointmentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
