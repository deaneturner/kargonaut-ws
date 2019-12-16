import { Tag, TagGenerator } from './TagGenerator';
import { Package } from '../models/Package';
import { Item } from '../models/Item';
import { Container } from '../models/Container';
import { Cargo } from '../models/Cargo';

export enum Type {
    ITEM,
    PACKAGE,
    CONTAINER,
}

export type Config = Container | Package | Item;

export class CargoFactory {
    /**
     * Generate Cargo
     *
     * @param type - Type of Cargo to Generate
     * @param config - Configuration consisting of initial properties
     */
    static generate(type: Type, config?: Config): Cargo {
        let result = Object.assign({
            tag: TagGenerator.generateId(),
            description: 'Description for cargo.'
        }, (config || {})) as Cargo;
        switch (type) {
            case Type.CONTAINER:
                result = result as Container;
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
