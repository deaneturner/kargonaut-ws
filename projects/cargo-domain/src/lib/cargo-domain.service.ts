import { Injectable } from '@angular/core';
import { CargoFactory, Type } from '../common/CargoFactory';

@Injectable({
    providedIn: 'root'
})
export class CargoDomainService {
    constructor() {
    }

    /**
     * Generator
     */
    public generatePackage() {
        return CargoFactory.generate(Type.PACKAGE);
    }
}
