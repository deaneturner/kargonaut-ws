import { Item } from '../../../cargo-domain/src/kn/models/Item';
import { Tag } from '../../../cargo-domain/src/common/TagGenerator';
import { Contract } from '../../models/contract';
import { Result } from '../../models/result';

export interface AppState {
    items: Item[];
    contracts: Contract[];
    results: Result[];
    tag: Tag;
}
