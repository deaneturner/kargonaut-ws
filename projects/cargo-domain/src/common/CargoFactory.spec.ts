import { TestBed } from '@angular/core/testing';
import { CargoFactory, Type } from './CargoFactory';

describe('Cargo Factory', () => {
    beforeEach(() => TestBed.configureTestingModule({}));

    it('should generate a cargo class by type, with no config', () => {
        expect(CargoFactory.generate(Type.PACKAGE)).toBeTruthy();
    });

    it('should generate a cargo class by type, with a given config', () => {
        expect(CargoFactory.generate(
            Type.PACKAGE,
            {
                cnLabel: 'test-label',
                cnDescription: 'test-description'
            })).toBeTruthy();
    });
});


