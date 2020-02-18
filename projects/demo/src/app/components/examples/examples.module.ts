import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SimpleMarkupExampleComponent } from './simple-markup-example/simple-markup-example.component';
import { BasicStylingExampleComponent } from './basic-styling-example/basic-styling-example.component';
import { TemplateExampleComponent } from './template-example/template-example.component';
import { DirectivesExampleComponent } from './directives-example/directives-example.component';
import { ComponentExampleComponent } from './component-example/component-example.component';
import { SubComponentExampleComponent } from './sub-component-example/sub-component-example.component';
import { ItemExtensionExampleComponent } from './item-extension-example/item-extension-example.component';
import { ItemExampleComponent } from './sub-component-example/item-example/item-example.component';
import { CargoModule } from '../../../../../cargo-domain/src/kn/cargo.module';
import { NgGistModule } from 'ng-gist';
import { PackageHeaderExampleComponent } from './sub-component-example/package-header-example/package-header-example.component';
import { StoreModule } from '@ngrx/store';
import { itemsReducer } from './reducers/item.reducers';
import { contractsReducer } from './reducers/contract.reducers';
import { resultsReducer } from './reducers/results.reducers';
import { RouterModule, Routes } from '@angular/router';

export const examplesRoutes: Routes = [
    { path: 'markup-example', component: SimpleMarkupExampleComponent },
    { path: 'basic-styling-example', component: BasicStylingExampleComponent },
    { path: 'directives-example', component: DirectivesExampleComponent },
    { path: 'template-example', component: TemplateExampleComponent },
    { path: 'component-example', component: ComponentExampleComponent },
    { path: 'item-extension-component-example', component: ItemExtensionExampleComponent },
    { path: 'sub-component-example', component: SubComponentExampleComponent },
];

@NgModule({
    declarations: [
        SimpleMarkupExampleComponent,
        BasicStylingExampleComponent,
        TemplateExampleComponent,
        DirectivesExampleComponent,
        ComponentExampleComponent,
        SubComponentExampleComponent,
        ItemExtensionExampleComponent,
        ItemExampleComponent,
        PackageHeaderExampleComponent,
    ],
    imports: [
        CommonModule,
        CargoModule,
        NgGistModule,
        RouterModule.forChild(examplesRoutes),
        StoreModule.forFeature('example_items', itemsReducer),
        StoreModule.forFeature('example_contracts', contractsReducer),
        StoreModule.forFeature('example_results', resultsReducer)
    ]
})
export class ExamplesModule {
}
