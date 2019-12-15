import { Injectable } from '@angular/core';

export enum GenerationType {
    ITEM,
    PACKAGE,
    CONTAINER,
}

@Injectable({
    providedIn: 'root'
})
export class CargoDomainService {
    static UNIQUE_TAG_ID_SEED = 'http://deaneturner.com/pkg-item';

    constructor() {
    }

    /**
     * Generator
     */
    public generate(generationType: GenerationType) {
        return {};
    }
}
