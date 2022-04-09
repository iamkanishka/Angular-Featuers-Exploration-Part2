import { TestBed } from '@angular/core/testing';

import { UserresolversResolver } from './userresolvers.resolver';

describe('UserresolversResolver', () => {
  let resolver: UserresolversResolver;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    resolver = TestBed.inject(UserresolversResolver);
  });

  it('should be created', () => {
    expect(resolver).toBeTruthy();
  });
});
