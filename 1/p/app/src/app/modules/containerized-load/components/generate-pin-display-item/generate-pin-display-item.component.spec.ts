import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GeneratePinDisplayItemComponent } from './generate-pin-display-item.component';

describe('GeneratePinDisplayItemComponent', () => {
  let component: GeneratePinDisplayItemComponent;
  let fixture: ComponentFixture<GeneratePinDisplayItemComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GeneratePinDisplayItemComponent]
    });
    fixture = TestBed.createComponent(GeneratePinDisplayItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
