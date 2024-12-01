import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VehicleSearcherComponent } from './vehicle-searcher.component';

describe('VehicleSearcherComponent', () => {
  let component: VehicleSearcherComponent;
  let fixture: ComponentFixture<VehicleSearcherComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VehicleSearcherComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VehicleSearcherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
