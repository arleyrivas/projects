import { ComponentFixture, TestBed } from '@angular/core/testing';

import AdministrationIpComponent from './administration-ip.component';

describe('AdministrationIpComponent', () => {
  let component: AdministrationIpComponent;
  let fixture: ComponentFixture<AdministrationIpComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdministrationIpComponent]
    });
    fixture = TestBed.createComponent(AdministrationIpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
