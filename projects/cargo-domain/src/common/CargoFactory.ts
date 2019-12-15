import { Tag, TagGenerator } from './TagGenerator';
import { Package } from '../models/Package';
import { Item } from '../models/Item';
import { Container } from '../models/Container';

export enum Type {
    ITEM,
    PACKAGE,
    CONTAINER,
}

export class CargoFactory {
    /**
     * Generate Cargo
     *
     * @param type - Type of Cargo to Generate
     */
    static generate(type: Type): Container | Package | Item {
        let result = {
            tag: TagGenerator.generateId(),
            description: 'test'
        };
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
