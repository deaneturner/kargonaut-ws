import { Tag } from '../../common/TagGenerator';

export abstract class Cargo {
    knTag?: Tag;
    knLabel: string;
    knDescription?: string;
}

export function compareCargoLabel(c1: Cargo, c2: Cargo) {
    const compare = c1.knTag.localeCompare(c2.knTag);

    if (compare > 0) {
        return 1;
    } else if ( compare < 0) {
        return -1;
    } else { return 0; }
}

export function selectCargoId(a: Cargo): string {
    return a.knTag;
}
