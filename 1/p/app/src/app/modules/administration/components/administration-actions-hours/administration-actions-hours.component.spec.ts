import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdministrationActionsHoursComponent } from './administration-actions-hours.component';

describe('AdministrationActionsHoursComponent', () => {
  let component: AdministrationActionsHoursComponent;
  let fixture: ComponentFixture<AdministrationActionsHoursComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdministrationActionsHoursComponent]
    });
    fixture = TestBed.createComponent(AdministrationActionsHoursComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
