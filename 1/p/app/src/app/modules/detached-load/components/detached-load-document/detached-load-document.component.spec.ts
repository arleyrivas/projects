import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetachedLoadDocumentComponent } from './detached-load-document.component';

describe('DetachedLoadDocumentComponent', () => {
  let component: DetachedLoadDocumentComponent;
  let fixture: ComponentFixture<DetachedLoadDocumentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetachedLoadDocumentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetachedLoadDocumentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
