import { TestBed } from '@angular/core/testing';

import { DocumentalService } from './documental.service';

describe('DocumentalService', () => {
  let service: DocumentalService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DocumentalService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
