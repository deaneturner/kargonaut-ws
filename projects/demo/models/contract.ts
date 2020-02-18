import { Item } from '../../cargo-domain/src/kn/models/Item';

export interface Contract extends Item {
    duration?: string;
}
