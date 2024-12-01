import { TestBed } from '@angular/core/testing';

import { HistorypinstateService } from './historypinstate.service';

describe('HistorypinstateService', () => {
  let service: HistorypinstateService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HistorypinstateService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
