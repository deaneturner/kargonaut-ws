import { Item } from '../../../../cargo-domain/src/kn/models/Item';
import { items } from '../../assets/data/items';
import { TagGenerator } from '../../../../cargo-domain/src/common/TagGenerator';
import { appendItem, deleteItem, replaceItem } from '../actions/item.actions';
import { createReducer } from '@ngrx/store';
import { on } from '@ngrx/store';
import { ItemExample } from '../../../models/item-example';

const initialItems: Item[] = items;

export function itemsReducer(state: any | undefined, action: any) {
    return createReducer<ItemExample[]>(
        initialItems,
        on(appendItem, (s, a) => s.concat({
            ...a.item,
            knTag: TagGenerator.generateId(),
        })),
        on(replaceItem, (s, a) => {
            const newItems = s.concat();
            newItems[newItems.findIndex(item => item.knTag === a.item.knTag)] = a.item;
            return newItems;
        }),
        on(deleteItem, (s, a) => s.filter(
            item => item.knTag !== a.knTag)),
    )(state, action);
}

