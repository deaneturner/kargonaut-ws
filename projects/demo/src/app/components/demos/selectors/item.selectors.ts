import { createFeatureSelector, createSelector } from '@ngrx/store';
import { ItemsState } from '../reducers/item.reducers';
import * as fromItems from '../reducers/item.reducers';

export const selectItemsState =
    createFeatureSelector<ItemsState>('items');

export const selectAllItems = createSelector(
    selectItemsState,
    fromItems.selectAll
);

export const areItemsLoaded = createSelector(
    selectItemsState,
    state => state.allItemsLoaded
);
