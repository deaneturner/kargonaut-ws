import { Item } from '../../../cargo-domain/src/models/Item';
import { Tag } from '../../../cargo-domain/src/common/TagGenerator';

export interface AppState {
    items: Item[];
    tag: Tag;
}
