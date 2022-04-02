import { TestBed } from '@angular/core/testing';

import { ClaimhistoryService } from './claimhistory.service';

describe('ClaimhistoryService', () => {
  let service: ClaimhistoryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ClaimhistoryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
