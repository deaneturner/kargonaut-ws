import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AppConfig } from '../../../models/appConfig';

@Injectable({
    providedIn: 'root'
})
export class AppConfigService {

    static settings: AppConfig;

    constructor(private http: HttpClient) {
    }

    init() {

        const jsonFile = `assets/config/app.config.json`;

        return new Promise<void>((resolve, reject) => {
            this.http.get(jsonFile).toPromise().then((response: AppConfig) => {
                AppConfigService.settings = response;

                console.log('Config Loaded');
                console.log(AppConfigService.settings);
                resolve();

            }).catch((response: any) => {
                reject(`Could not load the config file: ` + response);
            });
        });
    }
}

