import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NotificationsVentanaComponent } from './notifications-ventana.component';

describe('NotificationsVentanaComponent', () => {
  let component: NotificationsVentanaComponent;
  let fixture: ComponentFixture<NotificationsVentanaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NotificationsVentanaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NotificationsVentanaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
