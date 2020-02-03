import { Tag } from '../../../../cargo-domain/src/common/TagGenerator';
import { createAction, props } from '@ngrx/store';
import { Contract } from '../../../models/contract';

export const appendContract = createAction('[Contract] Append Contract', props<{ item: Contract }>());
export const replaceContract = createAction('[Contract] Replace Contract', props<{ item: Contract }>());
export const deleteContract = createAction('[Contract] Delete Contract', props<{ knTag: Tag }>());
export const editContract = createAction('[Contract] Edit Contract', props<{ knTag: Tag }>());
export const cancelContract = createAction('[Contract] Cancel Contract');
