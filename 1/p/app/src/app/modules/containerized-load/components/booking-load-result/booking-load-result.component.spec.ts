import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookingLoadResultComponent } from './booking-load-result.component';

describe('BookingLoadResultComponent', () => {
  let component: BookingLoadResultComponent;
  let fixture: ComponentFixture<BookingLoadResultComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BookingLoadResultComponent]
    });
    fixture = TestBed.createComponent(BookingLoadResultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
