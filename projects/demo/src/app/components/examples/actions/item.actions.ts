import { Item } from '../../../../../../cargo-domain/src/kn/models/Item';
import { Tag } from '../../../../../../cargo-domain/src/common/TagGenerator';
import { createAction, props } from '@ngrx/store';
import { ItemExample } from '../../../../../models/item-example';

export const appendItem = createAction('[Item] Append Item', props<{ item: Item }>());
export const replaceItem = createAction('[Item] Replace Item', props<{ item: ItemExample }>());
export const deleteItem = createAction('[Item] Delete Item', props<{ knTag: Tag }>());
export const cancelItem = createAction('[Item] Cancel Item');
