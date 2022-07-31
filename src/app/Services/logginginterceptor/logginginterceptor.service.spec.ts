import { TestBed } from '@angular/core/testing';

import { LogginginterceptorService } from './logginginterceptor.service';

describe('LogginginterceptorService', () => {
  let service: LogginginterceptorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LogginginterceptorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
