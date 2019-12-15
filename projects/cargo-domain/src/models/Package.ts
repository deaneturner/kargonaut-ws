import { Item } from './Item';
import { Cargo } from './Cargo';
import { Container } from './Container';

export interface Package extends Cargo {
    contains?: Item[];
    isContainedIn?: Container;
}
