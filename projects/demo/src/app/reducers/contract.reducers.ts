import { Tag, TagGenerator } from '../../../../cargo-domain/src/common/TagGenerator';
import { appendContract, cancelContract, deleteContract, editContract, replaceContract } from '../actions/contract-actions';
import { Action, createReducer } from '@ngrx/store';
import { on } from '@ngrx/store';
import { Contract } from '../../../models/contract';
import { contracts } from '../../assets/data/contracts';

const initialContracts: Contract[] = contracts;

export function contractsReducer(state: Contract[] | undefined, action: Action) {
    return createReducer<Contract[]>(
        initialContracts,
        on(appendContract, (s, a) => s.concat({
            ...a.item,
            knTag: TagGenerator.generateId(),
        })),
        on(replaceContract, (s, a) => {
            const newContracts = s.concat();
            newContracts[newContracts.findIndex(item => item.knTag === a.item.knTag)] = a.item;
            return newContracts;
        }),
        on(deleteContract, (s, a) => s.filter(
            item => item.knTag !== a.knTag)),
    )(state, action);
}

export function editContractTagReducer(state: string | undefined, action: Action) {
    return createReducer<Tag>(undefined,
        on(editContract, (_, a) => a.knTag),
        on(replaceContract, () => undefined),
        on(deleteContract, () => undefined),
        on(cancelContract, () => undefined),
    )(state, action);
}
