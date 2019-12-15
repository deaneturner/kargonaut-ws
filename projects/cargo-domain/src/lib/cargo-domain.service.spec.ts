import { TestBed } from '@angular/core/testing';

import { CargoDomainService} from './cargo-domain.service';
import { Type  } from '../common/CargoFactory';

describe('CargoDomainService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('service should be created', () => {
    const service: CargoDomainService = TestBed.get(CargoDomainService);
    expect(service).toBeTruthy();
  });

  describe('Cargo, Package, and Item Generation', () => {
    it('package should be generated', () => {
      const service: CargoDomainService = TestBed.get(CargoDomainService);
      expect(service.generatePackage()).toBeTruthy();
    });
  });
});


