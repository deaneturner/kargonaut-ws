import { Item } from '../../cargo-domain/src/models/Item';

export interface ItemExample extends Item {
    isSelected: boolean;
    checkbox: string;
    symbol: string;
    maxLikes: string;
    weightCode: string;
    weightSymbol: string;
    weightAmount: string;
}
