import { BrowserModule } from '@angular/platform-browser';
import { APP_INITIALIZER, NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutComponent } from './components/about/about.component';
import { AppConfigService } from './services/app-config-service.service';
import { HttpClientModule } from '@angular/common/http';
import { initializeApp } from './app.initializer';
import { SimpleMarkupExampleComponent } from './components/examples/simple-markup-example/simple-markup-example.component';
import { BasicStylingExampleComponent } from './components/examples/basic-styling-example/basic-styling-example.component';
import { DirectivesExampleComponent } from './components/examples/directives-example/directives-example.component';
import { CargoModule } from '../../../cargo-domain/src/kn/cargo.module';
import { TemplateExampleComponent } from './components/examples/template-example/template-example.component';
import { NgGistModule } from 'ng-gist';
import { ComponentExampleComponent } from './components/examples/component-example/component-example.component';
import { StoreModule } from '@ngrx/store';
import { editItemTagReducer, itemsReducer } from './reducers/item.reducers';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { CommonModule } from '@angular/common';
import { contractsReducer } from './reducers/contract.reducers';
import { ItemExtensionExampleComponent } from './components/examples/item-extension-example/item-extension-example.component';
import { SubComponentExampleComponent } from './components/examples/sub-component-example/sub-component-example.component';
import { ItemExampleComponent } from './components/examples/sub-component-example/item-example/item-example.component';

@NgModule({
    declarations: [
        // TODO: Lazy load my module vs eager load
        AboutComponent,
        AppComponent,
        SimpleMarkupExampleComponent,
        BasicStylingExampleComponent,
        DirectivesExampleComponent,
        TemplateExampleComponent,
        ComponentExampleComponent,
        ItemExtensionExampleComponent,
        SubComponentExampleComponent,
        ItemExampleComponent,
    ],
    imports: [
        CommonModule,
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        CargoModule,
        NgGistModule,
        // TODO: meta-reducers and reducers/index.ts?
        StoreModule.forRoot({
            items: itemsReducer,
            contracts: contractsReducer,
            editItemTag: editItemTagReducer
        }),
        // TODO: add log only during production, and max age
        StoreDevtoolsModule.instrument(),
    ],
    providers: [
        AppConfigService,
        {
            provide: APP_INITIALIZER,
            useFactory: initializeApp,
            deps: [AppConfigService],
            multi: true
        }
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
