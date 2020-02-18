import { Item } from '../../../../../../cargo-domain/src/kn/models/Item';
import { createReducer } from '@ngrx/store';
import { on } from '@ngrx/store';
import * as ItemActions from '../actions/item.actions';
import * as Cargo from '../../../../../../cargo-domain/src/kn/models/Cargo';
import { createEntityAdapter, EntityState } from '@ngrx/entity';
import { selectCargoId } from '../../../../../../cargo-domain/src/kn/models/Cargo';

export interface ItemsState extends EntityState<Item> {
    allItemsLoaded: boolean;
}

export const adapter = createEntityAdapter<Item>({
    selectId: selectCargoId,
    sortComparer: Cargo.compareCargoLabel
});

export const initialItemsState = adapter.getInitialState({
    allCoursesLoaded: false
});

export function itemsReducer(state, action) {
    return createReducer(
        initialItemsState,
        on(ItemActions.allItemsLoaded,
            (s, a) => adapter.addAll(
                a.items,
                {...s,
                    allItemsLoaded: true
                })),
        on(ItemActions.itemUpdated, (s, a) =>
            adapter.updateOne(a.update, s) )
    )(state, action);
}

export const { selectAll } = adapter.getSelectors();
