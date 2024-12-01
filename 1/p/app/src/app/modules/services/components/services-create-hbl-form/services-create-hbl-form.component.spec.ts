import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServicesCreateHblFormComponent } from './services-create-hbl-form.component';

describe('ServicesCreateHblFormComponent', () => {
  let component: ServicesCreateHblFormComponent;
  let fixture: ComponentFixture<ServicesCreateHblFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ServicesCreateHblFormComponent]
    });
    fixture = TestBed.createComponent(ServicesCreateHblFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
