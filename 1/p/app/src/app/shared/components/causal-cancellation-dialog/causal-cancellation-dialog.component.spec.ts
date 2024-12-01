import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CausalCancellationDialogComponent } from './causal-cancellation-dialog.component';

describe('CausalCancellationDialogComponent', () => {
  let component: CausalCancellationDialogComponent;
  let fixture: ComponentFixture<CausalCancellationDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CausalCancellationDialogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CausalCancellationDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
