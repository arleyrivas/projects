import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiceHistoryTableComponent } from './service-history-table.component';

describe('ServiceHistoryTableComponent', () => {
  let component: ServiceHistoryTableComponent;
  let fixture: ComponentFixture<ServiceHistoryTableComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ServiceHistoryTableComponent]
    });
    fixture = TestBed.createComponent(ServiceHistoryTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
