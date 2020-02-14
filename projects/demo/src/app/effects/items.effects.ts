import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import * as ItemActions from '../actions/item.actions';
import { ItemsHttpService } from '../services/items-http.service';
import { concatMap } from 'rxjs/internal/operators/concatMap';
import { map } from 'rxjs/operators';

@Injectable()
export class ItemsEffects {

    loadCourses$ = createEffect (
        () => this.actions$
        .pipe(
            ofType(ItemActions.allItemsLoaded),
            concatMap(() => this.itemsHttpService.findAllItems()),
            map(items => ItemActions.allItemsLoaded({items}))
        )
    );

constructor(private actions$: Actions,
            private itemsHttpService: ItemsHttpService) {}

}
