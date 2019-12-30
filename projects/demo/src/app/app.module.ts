import { BrowserModule } from '@angular/platform-browser';
import { APP_INITIALIZER, NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutComponent } from './components/about/about.component';
import { AppConfigService } from './services/app-config-service.service';
import { HttpClientModule } from '@angular/common/http';
import { initializeApp } from './app.initializer';
import { BundleComponent } from './bundle/bundle.component';
import { BundleExampleComponent } from './bundle-example/bundle-example.component';
import { SimpleMarkupExampleComponent } from './markup/simple-markup-example/simple-markup-example.component';
import { BasicStylingExampleComponent } from './markup/basic-styling-example/basic-styling-example.component';
import { DirectivesExampleComponent } from './markup/directives-example/directives-example.component';
import { CargoModule } from '../../../cargo-domain/src/cn/cargo.module';
import { PackageExampleComponent } from './package-example/package-example.component';
import { NgGistModule } from 'ng-gist';

@NgModule({
    declarations: [
        AboutComponent,
        AppComponent,
        BundleComponent,
        BundleExampleComponent,
        SimpleMarkupExampleComponent,
        BasicStylingExampleComponent,
        DirectivesExampleComponent,
        PackageExampleComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        CargoModule,
        NgGistModule
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
