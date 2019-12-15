import { Injectable } from '@angular/core';

import { v5 as uuidv5 } from 'uuid';

@Injectable({
  providedIn: 'root'
})
export class CargoDomainService {

  constructor() { }

  /**
   * Unique Tag Generator
   * Generate a unique ID (tag).
   */
  generateUniqueTagId(): string {
    return uuidv5('http://deaneturner.com/pkg-item', uuidv5.URL);
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
