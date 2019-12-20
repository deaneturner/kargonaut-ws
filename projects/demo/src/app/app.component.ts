import { Component, Inject } from '@angular/core';
import { examples } from './examples';
import { AppConfig, CONFIG_TOKEN } from './app.config';

@Component({
    selector: 'demo-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.less']
})
export class AppComponent {
    title: string;

    constructor(
        @Inject(CONFIG_TOKEN) private aooConfig: AppConfig,
    ) {
        this.title = aooConfig.title;
    }

    showNav: boolean;
    examples = examples;
}
