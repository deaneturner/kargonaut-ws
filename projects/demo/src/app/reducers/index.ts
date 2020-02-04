import {
  ActionReducer,
  ActionReducerMap,
  // createFeatureSelector,
  // createSelector,
  MetaReducer
} from '@ngrx/store';
import { environment } from '../../environments/environment';
import {routerReducer} from '@ngrx/router-store';

export interface AuthAppState {}

export const reducers: ActionReducerMap<AuthAppState> = {
    router: routerReducer
};

export function logger(reducer: ActionReducer<any>)
    : ActionReducer<any> {
    return (state, action) => {
        console.log('state before: ', state);
        console.log('action', action);

        return reducer(state, action);
    };

}

export const metaReducers: MetaReducer<AuthAppState>[] =
    !environment.production ? [logger] : [];

