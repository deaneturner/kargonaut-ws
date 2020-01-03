import { Item } from '../../../../cargo-domain/src/models/Item';
import { items } from '../../assets/data/items';
import { Tag, TagGenerator } from '../../../../cargo-domain/src/common/TagGenerator';
import { appendItem, cancelItem, deleteItem, editItem, replaceItem } from '../actions/item-actions';
import { createReducer } from '@ngrx/store';
import { on } from '@ngrx/store';

const initialItems: Item[] = items;

export const itemsReducer = createReducer<Item[]>(
    initialItems,
    on(appendItem, (state, action) => state.concat({
        ...action.item,
        cnTag: TagGenerator.generateId(),
    })),
    on(replaceItem, (state, action) => {
        const newItems = state.concat();
        newItems[newItems.findIndex(item => item.cnTag === action.item.cnTag)] = action.item;
        return newItems;
    }),
    on(deleteItem, (state, action) => state.filter(
        item => item.cnTag !== action.cnTag)),
);

export const editItemTagReducer = createReducer <Tag>(undefined,
        on(editItem, (_, action) => action.cnTag),
        on(replaceItem, () => undefined),
        on(deleteItem, () => undefined),
        on(cancelItem, () => undefined),
);

