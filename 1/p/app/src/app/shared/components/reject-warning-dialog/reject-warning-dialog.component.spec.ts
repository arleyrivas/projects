import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RejectWarningDialogComponent } from './reject-warning-dialog.component';

describe('RejectWarningDialogComponent', () => {
  let component: RejectWarningDialogComponent;
  let fixture: ComponentFixture<RejectWarningDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RejectWarningDialogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RejectWarningDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
