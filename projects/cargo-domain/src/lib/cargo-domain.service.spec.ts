import { TestBed } from '@angular/core/testing';

import { CargoDomainService } from './cargo-domain.service';

describe('CargoDomainService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('service should be created', () => {
    const service: CargoDomainService = TestBed.get(CargoDomainService);
    expect(service).toBeTruthy();
  });

  describe('Unique Tag ID Generation', () => {
    it('tag should be generated', () => {
      const service: CargoDomainService = TestBed.get(CargoDomainService);
      expect(service.generateUniqueTagId()).toBeTruthy();
    });
  });
});


