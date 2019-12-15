import { TestBed } from '@angular/core/testing';
import { TagGenerator } from './TagGenerator';

describe('Tag Generator', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should generate a unique ID, aka Tag', () => {
    expect(TagGenerator.generateId()).toBeTruthy();
  });
});


