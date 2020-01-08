import { BrowserModule } from '@angular/platform-browser';
import { APP_INITIALIZER, NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutComponent } from './components/about/about.component';
import { AppConfigService } from './services/app-config-service.service';
import { HttpClientModule } from '@angular/common/http';
import { initializeApp } from './app.initializer';
import { BundleExampleComponent } from './components/bundle-example/bundle-example.component';
import { SimpleMarkupExampleComponent } from './components/simple-markup-example/simple-markup-example.component';
import { BasicStylingExampleComponent } from './components/basic-styling-example/basic-styling-example.component';
import { DirectivesExampleComponent } from './components/directives-example/directives-example.component';
import { CargoModule } from '../../../cargo-domain/src/kn/cargo.module';
import { TemplateExampleComponent } from './components/template-example/template-example.component';
import { NgGistModule } from 'ng-gist';
import { ComponentExampleComponent } from './components/component-example/component-example.component';
import { StoreModule } from '@ngrx/store';
import { editItemTagReducer, itemsReducer } from './reducers/item.reducers';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { CommonModule } from '@angular/common';
import { SubComponentExampleComponent } from './components/sub-component-example/sub-component-example.component';

@NgModule({
    declarations: [
        AboutComponent,
        AppComponent,
        BundleExampleComponent,
        SimpleMarkupExampleComponent,
        BasicStylingExampleComponent,
        DirectivesExampleComponent,
        TemplateExampleComponent,
        ComponentExampleComponent,
        SubComponentExampleComponent
    ],
    imports: [
        CommonModule,
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        CargoModule,
        NgGistModule,
        StoreModule.forRoot({
            items: itemsReducer,
            editItemTag: editItemTagReducer
        }),
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
