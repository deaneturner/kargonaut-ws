import { TemplateRef } from '@angular/core';

export interface PackageConfig {
    cnLabel: string;
    cnCount?: number;
    cnLayout: {
        cnColumns: string[];
        cnMaxNoCollapse: number;
        cnIsCollapsed?: boolean;
        cnTemplateRef?: TemplateRef<any>;
    };
}
