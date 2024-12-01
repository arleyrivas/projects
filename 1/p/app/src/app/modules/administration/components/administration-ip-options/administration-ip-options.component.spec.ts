import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdministrationIpOptionsComponent } from './administration-ip-options.component';

describe('AdministrationIpOptionsComponent', () => {
  let component: AdministrationIpOptionsComponent;
  let fixture: ComponentFixture<AdministrationIpOptionsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdministrationIpOptionsComponent]
    });
    fixture = TestBed.createComponent(AdministrationIpOptionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
