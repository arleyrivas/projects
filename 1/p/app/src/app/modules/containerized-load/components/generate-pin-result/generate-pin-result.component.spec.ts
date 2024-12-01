import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GeneratePinResultComponent } from './generate-pin-result.component';

describe('GeneratePinResultComponent', () => {
  let component: GeneratePinResultComponent;
  let fixture: ComponentFixture<GeneratePinResultComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GeneratePinResultComponent]
    });
    fixture = TestBed.createComponent(GeneratePinResultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
