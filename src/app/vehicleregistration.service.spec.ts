import { TestBed } from '@angular/core/testing';

import { VehicleregistrationService } from './vehicleregistration.service';

describe('VehicleregistrationService', () => {
  let service: VehicleregistrationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VehicleregistrationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
