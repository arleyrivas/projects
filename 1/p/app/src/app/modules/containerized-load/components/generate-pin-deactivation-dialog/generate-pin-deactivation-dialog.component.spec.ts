import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GeneratePinDeactivationDialogComponent } from './generate-pin-deactivation-dialog.component';

describe('GeneratePinDeactivationDialogComponent', () => {
  let component: GeneratePinDeactivationDialogComponent;
  let fixture: ComponentFixture<GeneratePinDeactivationDialogComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GeneratePinDeactivationDialogComponent]
    });
    fixture = TestBed.createComponent(GeneratePinDeactivationDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
