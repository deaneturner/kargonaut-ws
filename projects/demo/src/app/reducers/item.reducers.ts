import { Item } from '../../../../cargo-domain/src/kn/models/Item';
import { createReducer } from '@ngrx/store';
import { on } from '@ngrx/store';
import * as ItemActions from '../actions/item.actions';
import * as Cargo from '../../../../cargo-domain/src/kn/models/Cargo';
import { createEntityAdapter, EntityState } from '@ngrx/entity';
import { selectCargoId } from '../../../../cargo-domain/src/kn/models/Cargo';

export interface ItemsState extends EntityState<Item> {
    allItemsLoaded: boolean;
}

export const adapter = createEntityAdapter<Item>({
    selectId: selectCargoId,
    sortComparer: Cargo.compareCargoLabel
});

export const initialItemsState = adapter.getInitialState({
    allCoursesLoaded: false,
    items: []
});

export function itemsReducer(state: any | undefined, action: any) {
    return createReducer(
        initialItemsState,
        on(ItemActions.allItemsLoaded,
            (s, a) => adapter.addAll(
                a.items,
                {...s,
                    allItemsLoaded: true
                })),
        // on(appendItem, (s, a) => s.concat({
        //     ...a.item,
        //     knTag: TagGenerator.generateId(),
        // })),
        // on(replaceItem, (s, a) => {
        //     const newItems = s.items.concat();
        //     newItems[newItems.findIndex(item => item.knTag === a.item.knTag)] = a.item;
        //     return newItems;
        // }),
        // on(deleteItem, (s, a) => s.filter(
        //     item => item.knTag !== a.knTag)),
    )(state, action);
}

export const { selectAll } = adapter.getSelectors();
