import { BrowserModule } from '@angular/platform-browser';
import { APP_INITIALIZER, NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PackageExampleComponent } from './package-example/package-example.component';
import { AboutComponent } from './about/about.component';
import { PackageComponent } from './package/package.component';
import { AppConfigService } from '../../services/app-config-service.service';
import { HttpClientModule } from '@angular/common/http';
import { initializeApp } from './app.initializer';
import { ContainerComponent } from './container/container.component';
import { ContainerExampleComponent } from './container-example/container-example.component';

@NgModule({
    declarations: [
        AboutComponent,
        AppComponent,
        PackageComponent,
        PackageExampleComponent,
        ContainerComponent,
        ContainerExampleComponent,
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule
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
