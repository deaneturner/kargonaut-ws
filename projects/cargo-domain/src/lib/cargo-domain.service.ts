import { Injectable } from '@angular/core';
import { v4 as uuid } from 'uuid';

@Injectable({
    providedIn: 'root'
})
export class CargoDomainService {
    static UNIQUE_TAG_ID_SEED = 'http://deaneturner.com/pkg-item';

    constructor() {
    }

    /**
     * Unique Tag Generator
     * Generate a unique ID (tag).
     */
    generateUniqueTagId(): string {
        return uuid(CargoDomainService.UNIQUE_TAG_ID_SEED);
    }

    /**
     * Package-Item Generator
     * Generate a new package item, the single entity that manages no others.
     */

    /**
     * Package Generator
     * Generate a new package that can manage multiple package items.
     */

    /**
     * Cargo Generator
     * Generate a new cargo hold that can manage multiple packages.
     */
}
