import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CutoffDialogComponent } from './cutoff-dialog.component';

describe('CutoffDialogComponent', () => {
  let component: CutoffDialogComponent;
  let fixture: ComponentFixture<CutoffDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CutoffDialogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CutoffDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
