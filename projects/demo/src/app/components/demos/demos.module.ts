import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveListComponent } from './demo1/reactive-list.component';
import { CargoModule } from '../../../../../cargo-domain/src/kn/cargo.module';
import { ReactiveListHeaderComponent } from './demo1/reactive-list-header-example/reactive-list-header.component';
import { ReactiveListItemComponent } from './demo1/reactive-list-item/reactive-list-item.component';
import { MatCardModule, MatListModule, MatSliderModule, MatToolbarModule } from '@angular/material';
import { ReactiveListItem2Component } from './demo1/reactive-list-item2/reactive-list-item2.component';
import { itemsReducer } from './reducers/item.reducers';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { RouterModule, Routes } from '@angular/router';
import { ItemsEffects } from './effects/items.effects';
import { ItemsHttpService } from '../../services/items-http.service';
import { ItemsResolver } from '../../services/items.resolver';
import { contractsReducer } from './reducers/contract.reducers';
import { resultsReducer } from './reducers/results.reducers';

export const demosRoutes: Routes = [
    {
        path: '',
        component: ReactiveListComponent,
        resolve: {
            items: ItemsResolver
        }},
];

@NgModule({
    declarations: [
        ReactiveListComponent,
        ReactiveListHeaderComponent,
        ReactiveListItemComponent,
        ReactiveListItem2Component,
    ],
    imports: [
        CommonModule,
        CargoModule,
        MatSliderModule,
        MatListModule,
        MatCardModule,
        MatToolbarModule,
        RouterModule.forChild(demosRoutes),
        EffectsModule.forFeature([ItemsEffects]),
        StoreModule.forFeature('items', itemsReducer),
        StoreModule.forFeature('contracts', contractsReducer),
        StoreModule.forFeature('results', resultsReducer)
    ],
    providers: [
        ItemsHttpService,
        ItemsResolver
    ]
})
export class DemosModule {
}
