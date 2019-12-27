import { Item } from './Item';

export interface ItemConfig {
    cnData: Item[];
    cnLayout: {
        cnColumns: string[];
    };
}
