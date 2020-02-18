import { TagGenerator } from '../../../../../../cargo-domain/src/common/TagGenerator';
import { appendContract, deleteContract, replaceContract } from '../actions/contract.actions';
import { Action, createReducer } from '@ngrx/store';
import { on } from '@ngrx/store';
import { Contract } from '../../../../../models/contract';
import { contracts } from '../../../../assets/data/contracts';

const initialContracts: Contract[] = contracts;

export function contractsReducer(state: Contract[] | undefined, action: Action) {
    return createReducer<Contract[]>(
        initialContracts,
        on(appendContract, (s, a) => s.concat({
            ...a.contract,
            knTag: TagGenerator.generateId(),
        })),
        on(replaceContract, (s, a) => {
            const newContracts = s.concat();
            newContracts[newContracts.findIndex(contract => contract.knTag === a.contract.knTag)] = a.contract;
            return newContracts;
        }),
        on(deleteContract, (s, a) => s.filter(
            contract => contract.knTag !== a.knTag)),
    )(state, action);
}
