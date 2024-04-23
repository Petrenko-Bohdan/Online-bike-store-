import { TestBed } from '@angular/core/testing';

import { CartMaintenanceService } from './cart-maintenance.service';

describe('CartMaintenanceService', () => {
  let service: CartMaintenanceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CartMaintenanceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
