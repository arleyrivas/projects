import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UploadDocumentsComponent } from './UploadDocumentsComponent';

describe('UploadDocumentsComponent', () => {
  let component: UploadDocumentsComponent;
  let fixture: ComponentFixture<UploadDocumentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UploadDocumentsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UploadDocumentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
})