import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdministrationUserOptionsComponent } from './administration-user-options.component';

describe('AdministrationUserOptionsComponent', () => {
  let component: AdministrationUserOptionsComponent;
  let fixture: ComponentFixture<AdministrationUserOptionsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdministrationUserOptionsComponent]
    });
    fixture = TestBed.createComponent(AdministrationUserOptionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
