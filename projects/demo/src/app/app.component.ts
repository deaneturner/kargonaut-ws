import { Component } from '@angular/core';
import { examples } from './examples';
import { AppConfigService } from './services/app-config-service.service';

@Component({
    selector: 'demo-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.less']
})
export class AppComponent {
    title: string;

    constructor() {
        this.title = AppConfigService.settings.title;
    }

    showNav: boolean;
    examples = examples;
}

