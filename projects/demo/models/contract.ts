import { Item } from '../../cargo-domain/src/models/Item';

export interface Contract extends Item {
    isSelected: boolean;
    checkbox: string;
}
