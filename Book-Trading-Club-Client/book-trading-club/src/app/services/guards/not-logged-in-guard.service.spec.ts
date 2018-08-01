import { TestBed, inject } from '@angular/core/testing';

import { NotLoggedInGuardService } from './not-logged-in-guard.service';

describe('NotLoggedInGuardService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [NotLoggedInGuardService]
    });
  });

  it('should be created', inject([NotLoggedInGuardService], (service: NotLoggedInGuardService) => {
    expect(service).toBeTruthy();
  }));
});
