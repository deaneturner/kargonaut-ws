import { CargoDomainService } from '../lib/cargo-domain.service';
import { v4 as uuid } from 'uuid';

export type Tag = string;

export class TagGenerator {
    /**
     * Unique Tag Generator
     * Generate a unique ID (tag).
     */
    static generateId = (): Tag => {
        return uuid(CargoDomainService.UNIQUE_TAG_ID_SEED);
    }
}


