import { BrowserModule } from '@angular/platform-browser';
import { APP_INITIALIZER, NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutComponent } from './components/about/about.component';
import { AppConfigService } from './services/app-config-service.service';
import { HttpClientModule } from '@angular/common/http';
import { initializeApp } from './app.initializer';
import { StoreModule } from '@ngrx/store';
import { editItemTagReducer, itemsReducer } from './components/examples/reducers/item.reducers';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { CommonModule } from '@angular/common';
import { contractsReducer } from './components/examples/reducers/contract.reducers';
import { ExamplesModule } from './components/examples/examples.module';
import { DemosModule } from './components/demos/demos.module';
import { resultsReducer } from './components/examples/reducers/results.reducers';

@NgModule({
    declarations: [
        // TODO: Lazy load my module vs eager load
        AboutComponent,
        AppComponent,
    ],
    imports: [
        CommonModule,
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        ExamplesModule,
        DemosModule,
        // TODO: meta-reducers and reducers/index.ts?
        StoreModule.forRoot({
            items: itemsReducer,
            contracts: contractsReducer,
            results: resultsReducer,
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
