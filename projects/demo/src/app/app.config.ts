import { InjectionToken } from '@angular/core';

export interface AppConfig {
    title: string;
}

export const APP_CONFIG: AppConfig = {
    title: 'Cargonaut'
};

export const CONFIG_TOKEN =
    new InjectionToken<AppConfig>('CONFIG_TOKEN',
        {
            providedIn: 'root',
            factory: () => APP_CONFIG
        });
