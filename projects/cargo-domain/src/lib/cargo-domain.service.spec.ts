import { TestBed } from '@angular/core/testing';

import { CargoDomainService, GenerationType } from './cargo-domain.service';

describe('CargoDomainService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('service should be created', () => {
    const service: CargoDomainService = TestBed.get(CargoDomainService);
    expect(service).toBeTruthy();
  });

  describe('Cargo, Package, and Item Generation', () => {
    it('package should be generated', () => {
      const service: CargoDomainService = TestBed.get(CargoDomainService);
      expect(service.generate(GenerationType.PACKAGE)).toBeTruthy();
    });
  });
});


