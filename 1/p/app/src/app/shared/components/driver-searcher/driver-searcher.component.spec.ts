import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DriverSearcherComponent } from './driver-searcher.component';

describe('DriverSearcherComponent', () => {
  let component: DriverSearcherComponent;
  let fixture: ComponentFixture<DriverSearcherComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DriverSearcherComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DriverSearcherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
