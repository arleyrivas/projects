import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TruckSearcherComponent } from './truck-searcher.component';

describe('TruckSearcherComponent', () => {
  let component: TruckSearcherComponent;
  let fixture: ComponentFixture<TruckSearcherComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TruckSearcherComponent]
    });
    fixture = TestBed.createComponent(TruckSearcherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
