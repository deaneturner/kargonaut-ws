import { TagGenerator } from './TagGenerator';
import { Package } from '../models/Package';
import { Item } from '../models/Item';
import { Bundle } from '../models/Bundle';
import { Cargo } from '../models/Cargo';

export enum Type {
    ITEM,
    PACKAGE,
    BUNDLE,
}

export type Config = Bundle | Package | Item;

export class CargoFactory {
    /**
     * Generate Cargo
     *
     * @param type - Type of Cargo to Generate
     * @param config (Config)- Configuration consisting of initial properties
     */
    static generate(type: Type, config?: Config): Cargo {
        let result = {
            knTag: TagGenerator.generateId(),
            knDescription: 'Description for cargo.',
            ... config
        } as Cargo;

        switch (type) {
            case Type.BUNDLE:
                result = result as Bundle;
                break;
            case Type.PACKAGE:
                result = result as Package;
                break;
            case Type.ITEM:
                result = result as Item;
                break;
        }
        return result;
    }
}
