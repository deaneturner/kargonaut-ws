import { Injectable } from '@angular/core';
import { CargoFactory, Type } from '../common/CargoFactory';
import { Cargo } from '../models/Cargo';
import { Package } from '../models/Package';

@Injectable({
    providedIn: 'root'
})
export class CargoService {
    constructor() {
    }

    /**
     * Generator
     */
    public generatePackage(config?: Package): Cargo {
        return CargoFactory.generate(Type.PACKAGE, config);
    }
}
