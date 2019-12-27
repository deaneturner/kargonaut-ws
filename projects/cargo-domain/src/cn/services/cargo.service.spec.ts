import { TestBed } from '@angular/core/testing';

import { CargoService } from './cargo.service';

describe('CargoDomainService', () => {
    beforeEach(() => TestBed.configureTestingModule({}));

    it('service should be created', () => {
        const service: CargoService = TestBed.get(CargoService);
        expect(service).toBeTruthy();
    });

    describe('Cargo, Package, and Item Generation', () => {
        it('package should be generated, without a config', () => {
            expect(CargoService.generatePackage()).toBeTruthy();
        });
        it('package should be generated, with a config', () => {
            expect(CargoService.generatePackage({
                cnLabel: 'test-label',
                cnDescription: 'test-description'
            })).toBeTruthy();
        });
    });
});


