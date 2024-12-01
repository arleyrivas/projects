import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LegalNoticesDialogComponent } from './legal-notices-dialog.component';

describe('LegalNoticesDialogComponent', () => {
  let component: LegalNoticesDialogComponent;
  let fixture: ComponentFixture<LegalNoticesDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LegalNoticesDialogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LegalNoticesDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
