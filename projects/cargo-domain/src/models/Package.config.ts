import { TemplateRef } from '@angular/core';

export interface PackageConfig {
    cnLabel: string;
    cnLayout: {
        cnColumns: string[];
        cnTemplateRef?: TemplateRef<any>;
    };
}
