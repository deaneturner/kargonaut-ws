import { Tag } from '../../../cargo-domain/src/common/TagGenerator';
import { Contract } from '../../models/contract';
import { Result } from '../../models/result';
import { ItemExample } from '../../models/item-example';

export interface AppState {
    items: ItemExample[];
    example_items: ItemExample[];
    contracts: Contract[];
    example_contracts: Contract[];
    results: Result[];
    example_results: Result[];
    tag: Tag;
}
