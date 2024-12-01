import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetachedLoadResultComponent } from './detached-load-result.component';

describe('DetachedLoadResultComponent', () => {
  let component: DetachedLoadResultComponent;
  let fixture: ComponentFixture<DetachedLoadResultComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetachedLoadResultComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetachedLoadResultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
