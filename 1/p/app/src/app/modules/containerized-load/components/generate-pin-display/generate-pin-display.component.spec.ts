import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GeneratePinDisplayComponent } from './generate-pin-display.component';

describe('GeneratePinDisplayComponent', () => {
  let component: GeneratePinDisplayComponent;
  let fixture: ComponentFixture<GeneratePinDisplayComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GeneratePinDisplayComponent]
    });
    fixture = TestBed.createComponent(GeneratePinDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
