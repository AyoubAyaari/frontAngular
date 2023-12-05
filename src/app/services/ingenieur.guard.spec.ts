import { TestBed } from '@angular/core/testing';

import { IngenieurGuard } from './ingenieur.guard';

describe('IngenieurGuard', () => {
  let guard: IngenieurGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(IngenieurGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
