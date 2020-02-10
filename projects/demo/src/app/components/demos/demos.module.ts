import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveListComponent } from './demo1/reactive-list.component';
import { CargoModule } from '../../../../../cargo-domain/src/kn/cargo.module';
import { ReactiveListHeaderComponent } from './demo1/reactive-list-header-example/reactive-list-header.component';
import { ReactiveListItemComponent } from './demo1/reactive-list-item/reactive-list-item.component';
import { MatCardModule, MatListModule, MatSliderModule, MatToolbarModule } from '@angular/material';
import { ReactiveListItem2Component } from './demo1/reactive-list-item2/reactive-list-item2.component';


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
    ]
})
export class DemosModule {
}
