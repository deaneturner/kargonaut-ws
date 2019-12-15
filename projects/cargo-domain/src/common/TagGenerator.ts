import { v4 as uuid } from 'uuid';

export type Tag = string;

export class TagGenerator {
    static UNIQUE_TAG_ID_SEED = 'http://deaneturner.com/pkg-item';
    /**
     * Unique Tag Generator
     * Generate a unique ID (tag).
     */
    static generateId(): Tag {
        return uuid(TagGenerator.UNIQUE_TAG_ID_SEED);
    }
}


