import { results } from '../../assets/data/results';
import { Tag, TagGenerator } from '../../../../cargo-domain/src/common/TagGenerator';
import { appendResult, cancelResult, deleteResult, editResult, replaceResult } from '../actions/result-actions';
import { Action, createReducer } from '@ngrx/store';
import { on } from '@ngrx/store';
import { Result } from '../../../models/result';

const initialResults: Result[] = results;

export function resultsReducer(state: Result[] | undefined, action: Action) {
    return createReducer<Result[]>(
        initialResults,
        on(appendResult, (s, a) => s.concat({
            ...a.item,
            knTag: TagGenerator.generateId(),
        })),
        on(replaceResult, (s, a) => {
            const newResults = s.concat();
            newResults[newResults.findIndex(item => item.knTag === a.item.knTag)] = a.item;
            return newResults;
        }),
        on(deleteResult, (s, a) => s.filter(
            item => item.knTag !== a.knTag)),
    )(state, action);
}

export function editResultTagReducer(state: string | undefined, action: Action) {
    return createReducer<Tag>(undefined,
        on(editResult, (_, a) => a.knTag),
        on(replaceResult, () => undefined),
        on(deleteResult, () => undefined),
        on(cancelResult, () => undefined),
    )(state, action);
}
