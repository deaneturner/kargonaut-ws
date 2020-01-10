import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveListDemoComponent } from '../demo1/reactive-list-demo.component';
import { CargoModule } from '../../../../../../cargo-domain/src/kn/cargo.module';
import { ReactiveListHeaderComponent } from '../demo1/reactive-list-header-example/reactive-list-header.component';
import { ReactiveListItemComponent } from '../demo1/reactive-list-item/reactive-list-item.component';


@NgModule({
    declarations: [
        ReactiveListDemoComponent,
        ReactiveListHeaderComponent,
        ReactiveListItemComponent,
    ],
    imports: [
        CommonModule,
        CargoModule,
    ]
})
export class DemosModule {
}
