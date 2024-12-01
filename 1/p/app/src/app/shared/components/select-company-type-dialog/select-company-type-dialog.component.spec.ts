import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectCompanyTypeDialogComponent } from './select-company-type-dialog.component';

describe('SelectCompanyTypeDialogComponent', () => {
  let component: SelectCompanyTypeDialogComponent;
  let fixture: ComponentFixture<SelectCompanyTypeDialogComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SelectCompanyTypeDialogComponent]
    });
    fixture = TestBed.createComponent(SelectCompanyTypeDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
