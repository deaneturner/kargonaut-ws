import { CargoDomainService } from '../lib/cargo-domain.service';
import { v4 as uuid } from 'uuid';

export type Tag = string;

/**
 * Unique Tag Generator
 * Generate a unique ID (tag).
 */
generateUUID = (): Tag => {
    return uuid(CargoDomainService.UNIQUE_TAG_ID_SEED);
};

