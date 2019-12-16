import { TestBed } from '@angular/core/testing';

import { CargoService} from './cargo.service';
import { Type  } from '../common/CargoFactory';

describe('CargoDomainService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('service should be created', () => {
    const service: CargoService = TestBed.get(CargoService);
    expect(service).toBeTruthy();
  });

  describe('Cargo, Package, and Item Generation', () => {
    it('package should be generated, without a config', () => {
      const service: CargoService = TestBed.get(CargoService);
      expect(service.generatePackage()).toBeTruthy();
    });
    it('package should be generated, with a config', () => {
      const service: CargoService = TestBed.get(CargoService);
      expect(service.generatePackage({ description: 'test'})).toBeTruthy();
    });
  });
});


