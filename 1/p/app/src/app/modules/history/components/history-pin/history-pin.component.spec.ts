import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HistoryPinComponent } from './history-pin.component';

describe('HistoryPinComponent', () => {
  let component: HistoryPinComponent;
  let fixture: ComponentFixture<HistoryPinComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HistoryPinComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HistoryPinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
