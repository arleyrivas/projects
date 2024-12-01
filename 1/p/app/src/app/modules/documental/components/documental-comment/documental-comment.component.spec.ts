import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DocumentalCommentComponent } from './documental-comment.component';

describe('DocumentalCommentComponent', () => {
  let component: DocumentalCommentComponent;
  let fixture: ComponentFixture<DocumentalCommentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DocumentalCommentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DocumentalCommentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
