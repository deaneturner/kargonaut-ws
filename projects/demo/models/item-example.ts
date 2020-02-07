import { Item } from '../../cargo-domain/src/kn/models/Item';

export interface ItemExample extends Item {
    checkbox?: string;
    symbol?: string;
    maxLikes?: string;
    weightCode?: string;
    weightSymbol?: string;
    weightAmount?: string;
}
