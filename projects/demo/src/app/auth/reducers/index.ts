import { Action, createReducer, on } from '@ngrx/store';
import {User} from '../model/user.model';
import {AuthActions} from '../action-types';

export interface AuthState {
    user: User;
}

export const initialAuthState: AuthState = {
    user: undefined
};

export function authReducer(state: AuthState, action: Action) {
    return createReducer(

        initialAuthState,

        on(AuthActions.login, (loginState, loginAction) => {
            return {
                user: loginAction.user
            };
        }),

        on(AuthActions.logout, () => {
            return {
                user: undefined
            };
        })
    )(state, action);
}
