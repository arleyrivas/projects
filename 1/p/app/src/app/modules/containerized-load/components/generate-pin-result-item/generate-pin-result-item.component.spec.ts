import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GeneratePinResultItemComponent } from './generate-pin-result-item.component';

describe('GeneratePinResultItemComponent', () => {
  let component: GeneratePinResultItemComponent;
  let fixture: ComponentFixture<GeneratePinResultItemComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GeneratePinResultItemComponent]
    });
    fixture = TestBed.createComponent(GeneratePinResultItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
