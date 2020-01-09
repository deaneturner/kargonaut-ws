import { Item } from '../../../../../../cargo-domain/src/kn/models/Item';
import { items } from '../../../../assets/data/items';
import { Tag, TagGenerator } from '../../../../../../cargo-domain/src/common/TagGenerator';
import { appendItem, cancelItem, deleteItem, editItem, replaceItem } from '../actions/item-actions';
import { Action, createReducer } from '@ngrx/store';
import { on } from '@ngrx/store';

const initialItems: Item[] = items;

export function itemsReducer(state: Item[] | undefined, action: Action) {
    return createReducer<Item[]>(
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

export function editItemTagReducer(state: string | undefined, action: Action) {
    return createReducer<Tag>(undefined,
        on(editItem, (_, a) => a.knTag),
        on(replaceItem, () => undefined),
        on(deleteItem, () => undefined),
        on(cancelItem, () => undefined),
    )(state, action);
}
