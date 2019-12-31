import { Item } from './Item';
import { TemplateRef } from '@angular/core';

export interface ItemConfig {
    cnData: Item[];
    cnLayout: {
        cnColumns: string[];
        cnTemplateRef?: TemplateRef<any>;
    };
}
