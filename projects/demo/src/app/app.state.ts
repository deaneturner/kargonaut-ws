import { Item } from '../../../cargo-domain/src/kn/models/Item';
import { Tag } from '../../../cargo-domain/src/common/TagGenerator';
import { Contract } from '../../models/contract';

export interface AppState {
    items: Item[];
    contracts: Contract[];
    tag: Tag;
}
