import { Component, OnInit } from '@angular/core';
import { examples } from './examples';
import { AppConfigService } from './services/app-config-service.service';
import { logout } from './auth/auth.actions';
import { AuthState } from './auth/reducers';
import { select, Store } from '@ngrx/store';
import { isLoggedIn, isLoggedOut } from './auth/auth.selectors';
import { Observable } from 'rxjs';

@Component({
    selector: 'demo-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
    title: string;
    showNav: boolean;
    routes = examples;

    isLoggedIn$: Observable<boolean>;
    isLoggedOut$: Observable<boolean>;

    constructor(private store: Store<AuthState>) {
        this.title = AppConfigService.settings.title;
    }

    ngOnInit() {
        this.isLoggedIn$ = this.store
            .pipe(
                select(isLoggedIn)
            );

        this.isLoggedOut$ = this.store
            .pipe(
                select(isLoggedOut)
            );
    }

    logout() {
        this.store.dispatch(logout());
    }
}

