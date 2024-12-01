import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectCompanyTypeMempDialogComponent } from './select-company-type-memp-dialog.component';

describe('SelectCompanyTypeMempDialogComponent', () => {
  let component: SelectCompanyTypeMempDialogComponent;
  let fixture: ComponentFixture<SelectCompanyTypeMempDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SelectCompanyTypeMempDialogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SelectCompanyTypeMempDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
