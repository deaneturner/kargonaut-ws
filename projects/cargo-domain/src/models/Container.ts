import { Package } from './Package';
import { Cargo } from './Cargo';

export interface Container extends Cargo {
    contains?: Package[];
    isContainedIn?: never;
}
