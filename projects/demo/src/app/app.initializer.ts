import { AppConfigService } from './services/app-config-service.service';

export function initializeApp(appConfigService: AppConfigService) {
    return (): Promise<any> => {
        return appConfigService.init();
    };
}
