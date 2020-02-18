import { Item } from './Item';
import { TemplateRef } from '@angular/core';
import { Observable } from 'rxjs';

export interface ItemConfig {
    knData: Observable<Item[]>;
    knLayout?: {
        knColumns: string[];
        knTemplateRef?: TemplateRef<any>;
    };
}
