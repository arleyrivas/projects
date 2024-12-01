import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DocumentalHistoryComponent } from './documental-history.component';

describe('DocumentalHistoryComponent', () => {
  let component: DocumentalHistoryComponent;
  let fixture: ComponentFixture<DocumentalHistoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DocumentalHistoryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DocumentalHistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
