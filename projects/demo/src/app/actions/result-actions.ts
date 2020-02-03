import { Tag } from '../../../../cargo-domain/src/common/TagGenerator';
import { createAction, props } from '@ngrx/store';
import { Result } from '../../../models/result';

export const appendResult = createAction('[Result] Append Result', props<{ item: Result }>());
export const replaceResult = createAction('[Result] Replace Result', props<{ item: Result }>());
export const deleteResult = createAction('[Result] Delete Result', props<{ knTag: Tag }>());
export const editResult = createAction('[Result] Edit Result', props<{ knTag: Tag }>());
export const cancelResult = createAction('[Result] Cancel Result');
