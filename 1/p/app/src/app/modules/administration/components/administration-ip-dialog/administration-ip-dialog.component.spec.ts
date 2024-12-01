import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdministrationIpDialogComponent } from './administration-ip-dialog.component';

describe('AdministrationIpDialogComponent', () => {
  let component: AdministrationIpDialogComponent;
  let fixture: ComponentFixture<AdministrationIpDialogComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdministrationIpDialogComponent]
    });
    fixture = TestBed.createComponent(AdministrationIpDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
