import { Item } from './Item';
import { TemplateRef } from '@angular/core';
import { Observable } from 'rxjs';

export interface ItemConfig {
    cnData: Item[] | Observable<Item[]>;
    cnLayout: {
        cnColumns: string[];
        cnTemplateRef?: TemplateRef<any>;
    };
}
