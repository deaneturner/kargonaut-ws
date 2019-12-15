import { Tag } from './TagGenerator';
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
        return {
            tag: '1' as Tag,
            description: 'test'
        } as Package;
    }
}
