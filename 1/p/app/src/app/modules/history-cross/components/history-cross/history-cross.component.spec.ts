import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HistoryCrossComponent } from './history-cross.component';

describe('HistoryCrossComponent', () => {
  let component: HistoryCrossComponent;
  let fixture: ComponentFixture<HistoryCrossComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HistoryCrossComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HistoryCrossComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
