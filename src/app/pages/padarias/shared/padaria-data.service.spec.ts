import { TestBed } from '@angular/core/testing';

import { PadariaDataService } from './padaria-data.service';

describe('PadariaDataService', () => {
  let service: PadariaDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PadariaDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
