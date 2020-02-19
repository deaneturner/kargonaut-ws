import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AppState } from '../app.state';
import { Store } from '@ngrx/store';
import { tap } from 'rxjs/internal/operators/tap';
import { loadAllItems } from '../components/demos/actions/item.actions';
import { first } from 'rxjs/internal/operators/first';
import { finalize } from 'rxjs/operators';
import { areItemsLoaded } from '../components/demos/selectors/item.selectors';
import { select } from '@ngrx/store';
import { filter } from 'rxjs/internal/operators/filter';

@Injectable()
export class ItemsResolver implements Resolve<any> {

    loading = false; // required due to multiple router-store events i.e. request and navigation

    constructor(private store: Store<AppState>) {
    }

    resolve(route: ActivatedRouteSnapshot,
            state: RouterStateSnapshot): Observable<any> {
        return this.store
            .pipe(
                select(areItemsLoaded), // have items been initially loaded - avoid repeat on route to and from resolver
                tap((itemsLoaded) => {
                    if (!this.loading && !itemsLoaded) {
                        this.loading = true;
                        this.store.dispatch(loadAllItems());
                    }
                }),
                filter(itemsLoaded => itemsLoaded),
                first(), // must complete in order to route
                finalize(() => this.loading = false)
            );
    }
}
