import { Item } from './Item';
import { Cargo } from './Cargo';
import { Bundle } from './Bundle';

export interface Package extends Cargo {
    cnContains?: Item[];
    cnIsContainedIn?: Bundle;
}
