import { Item } from '../../../../../../cargo-domain/src/kn/models/Item';
import { Tag } from '../../../../../../cargo-domain/src/common/TagGenerator';
import { createAction, props } from '@ngrx/store';
import { ItemExample } from '../../../../../models/item-example';
import { Update } from '@ngrx/entity';

export const appendItem = createAction('[Item] Append Item', props<{ item: Item }>());
export const replaceItem = createAction('[Item] Replace Item', props<{ item: ItemExample }>());
export const deleteItem = createAction('[Item] Delete Item', props<{ knTag: Tag }>());
export const cancelItem = createAction('[Item] Cancel Item');


export const loadAllItems = createAction('[Item Resolver] Load All Items');
export const allItemsLoaded = createAction('[Load Items Effect] All Items Loaded', props<{ items: Item[] }>());

export const itemUpdated = createAction(
    '[Edit ItemExample] ItemExample Updated',
    props<{update: Update<Item>}>()
);
