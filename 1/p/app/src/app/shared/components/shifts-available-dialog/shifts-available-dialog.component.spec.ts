import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShiftsAvailableDialogComponent } from './shifts-available-dialog.component';

describe('ShiftsAvailableDialogComponent', () => {
  let component: ShiftsAvailableDialogComponent;
  let fixture: ComponentFixture<ShiftsAvailableDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShiftsAvailableDialogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShiftsAvailableDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
