import { Injectable } from '@angular/core';

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
    return '1';
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
