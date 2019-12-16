import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PackageExampleComponent } from './package-example/package-example.component';
import { AboutComponent } from './about/about.component';
import { PackageComponent } from './package/package.component';

@NgModule({
    declarations: [
        AboutComponent,
        AppComponent,
        PackageComponent,
        PackageExampleComponent,
    ],
    imports: [
        BrowserModule,
        AppRoutingModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
