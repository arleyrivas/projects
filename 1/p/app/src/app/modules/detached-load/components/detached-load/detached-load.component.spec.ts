import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetachedLoadComponent } from './detached-load.component';

describe('DetachedLoadComponent', () => {
  let component: DetachedLoadComponent;
  let fixture: ComponentFixture<DetachedLoadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetachedLoadComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetachedLoadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
