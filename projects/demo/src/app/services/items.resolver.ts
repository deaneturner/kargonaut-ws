import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AppState } from '../app.state';
import { Store } from '@ngrx/store';
import { tap } from 'rxjs/internal/operators/tap';
import { loadAllItems } from '../actions/item.actions';
import { first } from 'rxjs/internal/operators/first';
import { finalize } from 'rxjs/operators';

@Injectable()
export class ItemsResolver implements Resolve<any> {

    loading = false;

    constructor(private store: Store<AppState>) {
    }

    resolve(route: ActivatedRouteSnapshot,
            state: RouterStateSnapshot): Observable<any> {
        return this.store
            .pipe(
                tap(() => {
                    if (!this.loading) { // required due to multiple router-store events i.e. request and navigation
                        this.loading = true;
                        this.store.dispatch(loadAllItems());
                    }
                }),
                first(),
                finalize(() => this.loading = false)
            );
    }
}
