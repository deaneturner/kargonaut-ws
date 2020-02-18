import { TemplateRef } from '@angular/core';

export interface PackageConfig {
    knLabel: string;
    knCount?: number;
    knLayout?: {
        knColumns?: string[];
        knMaxCollapse?: number;
        knIsExpanded?: boolean;
        knTemplateRef?: TemplateRef<any>;
    };
}
