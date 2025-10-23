import { TestBed } from '@angular/core/testing';

import { AnimaleService } from './animale-service';

describe('AnimaleService', () => {
  let service: AnimaleService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AnimaleService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
