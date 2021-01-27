import { TestBed } from '@angular/core/testing';

import { PadariaService } from './padaria.service';

describe('PadariaService', () => {
  let service: PadariaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PadariaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
