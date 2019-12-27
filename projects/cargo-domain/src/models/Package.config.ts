import { Package } from './Package';

export interface PackageConfig {
    cnData: Package;
    cnLayout: {
        cnColumns: string[];
    };
}
