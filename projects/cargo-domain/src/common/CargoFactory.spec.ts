import { TestBed } from '@angular/core/testing';
import { CargoFactory, Type } from './CargoFactory';

describe('Cargo Factory', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should generate a cargo class by type', () => {
    expect(CargoFactory.generate(Type.PACKAGE)).toBeTruthy();
  });
});


