import { Package } from './Package';
import { Cargo } from './Cargo';

export interface Bundle extends Cargo {
    cnContains?: Package[];
    cnIsContainedIn?: never;
}
