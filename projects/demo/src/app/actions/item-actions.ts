import { Item } from '../../../../cargo-domain/src/models/Item';
import { Tag } from '../../../../cargo-domain/src/common/TagGenerator';
import { createAction, props } from '@ngrx/store';

export const appendItem = createAction('[Item[ Append Item', props<{ item: Item }>());
export const replaceItem = createAction('[Item[ Replace Item', props<{ item: Item }>());
export const deleteItem = createAction('[Item[ Delete Item', props<{ cnTag: Tag }>());
export const editItem = createAction('[Item[ Edit Item', props<{ cnTag: Tag }>());
export const cancelItem = createAction('[Item[ Cancel Item');