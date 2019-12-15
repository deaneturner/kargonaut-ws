import { TestBed } from '@angular/core/testing';

import { CargoDomainService } from './cargo-domain.service';

describe('CargoDomainService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CargoDomainService = TestBed.get(CargoDomainService);
    expect(service).toBeTruthy();
  });

  describe('Unique Tag ID Generation', () => {
    it('should be created', () => {
      const service: CargoDomainService = TestBed.get(CargoDomainService);
      expect(service).toBeTruthy();
    });
  });
});


