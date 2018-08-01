import { TestBed, inject } from '@angular/core/testing';

import { AlreadyLoggedInGuardService } from './already-logged-in-guard.service';

describe('AlreadyLoggedInGuardService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AlreadyLoggedInGuardService]
    });
  });

  it('should be created', inject([AlreadyLoggedInGuardService], (service: AlreadyLoggedInGuardService) => {
    expect(service).toBeTruthy();
  }));
});
