import { BrowserModule } from '@angular/platform-browser';
import { APP_INITIALIZER, NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PackageExampleComponent } from './package-example/package-example.component';
import { AboutComponent } from './about/about.component';
import { PackageComponent } from './package/package.component';
import { AppConfigService } from '../../services/app-config-service.service';
import { HttpClientModule } from '@angular/common/http';

export function initializeApp(appConfigService: AppConfigService) {
    return (): Promise<any> => {
        return appConfigService.init();
    };
}

@NgModule({
    declarations: [
        AboutComponent,
        AppComponent,
        PackageComponent,
        PackageExampleComponent,
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
