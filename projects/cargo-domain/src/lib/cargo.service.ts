import { Injectable } from '@angular/core';
import { CargoFactory, Type } from '../common/CargoFactory';
import { Cargo } from '../models/Cargo';

@Injectable({
    providedIn: 'root'
})
export class CargoService {
    constructor() {
    }

    /**
     * Generator
     */
    public generatePackage(): Cargo {
        return CargoFactory.generate(Type.PACKAGE);
    }
}
