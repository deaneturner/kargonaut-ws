import { Item } from './Item';
import { ElementRef } from '@angular/core';

export interface ItemConfig {
    cnData: Item[];
    cnLayout: {
        cnColumns: string[];
        cnTemplateRef?: ElementRef;
    };
}
