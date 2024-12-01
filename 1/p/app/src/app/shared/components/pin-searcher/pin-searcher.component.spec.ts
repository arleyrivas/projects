import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PinSearcherComponent } from './pin-searcher.component';

describe('PinSearcherComponent', () => {
  let component: PinSearcherComponent;
  let fixture: ComponentFixture<PinSearcherComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PinSearcherComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PinSearcherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
