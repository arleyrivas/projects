import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DocumentalComponent } from './documental.component';

describe('DocumentalComponent', () => {
  let component: DocumentalComponent;
  let fixture: ComponentFixture<DocumentalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DocumentalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DocumentalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
