import { TestBed } from '@angular/core/testing';

import { DeactivateauthguardGuard } from './deactivateauthguard.guard';

describe('DeactivateauthguardGuard', () => {
  let guard: DeactivateauthguardGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(DeactivateauthguardGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
