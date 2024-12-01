import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GeneratePinTruckUnitComponent } from './generate-pin-truck-unit.component';

describe('GeneratePinTruckUnitComponent', () => {
  let component: GeneratePinTruckUnitComponent;
  let fixture: ComponentFixture<GeneratePinTruckUnitComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GeneratePinTruckUnitComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GeneratePinTruckUnitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
