import { Cargo } from './Cargo';
import { Package } from './Package';

export interface Item extends Cargo {
    isSelected?: boolean;
    knIsContainedIn?: Package;
}
