import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CaptionedImageExampleComponent } from './captioned-image-example/captioned-image-example.component';
import { AboutComponent } from './about/about.component';
import { CaptionedImageComponent } from './captioned-image/captioned-image.component';

@NgModule({
    declarations: [
        AboutComponent,
        AppComponent,
        CaptionedImageComponent,
        CaptionedImageExampleComponent,
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
