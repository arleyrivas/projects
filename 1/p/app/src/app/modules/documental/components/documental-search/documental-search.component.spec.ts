import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DocumentalSearchComponent } from './documental-search.component';

describe('DocumentalSearchComponent', () => {
  let component: DocumentalSearchComponent;
  let fixture: ComponentFixture<DocumentalSearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DocumentalSearchComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DocumentalSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
