import { Tag } from '../../../cargo-domain/src/common/TagGenerator';
import { Contract } from '../../models/contract';
import { Result } from '../../models/result';
import { ItemExample } from '../../models/item-example';

export interface AppState {
    items: ItemExample[];
    contracts: Contract[];
    results: Result[];
    tag: Tag;
}
