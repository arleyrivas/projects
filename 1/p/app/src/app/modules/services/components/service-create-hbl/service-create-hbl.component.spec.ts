import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiceCreateHblComponent } from './service-create-hbl.component';

describe('ServiceCreateHblComponent', () => {
  let component: ServiceCreateHblComponent;
  let fixture: ComponentFixture<ServiceCreateHblComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ServiceCreateHblComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ServiceCreateHblComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
