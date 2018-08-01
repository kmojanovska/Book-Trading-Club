import { TestBed, inject } from '@angular/core/testing';

import { TradeRequestsService } from './trade-requests.service';

describe('TradeRequestsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TradeRequestsService]
    });
  });

  it('should be created', inject([TradeRequestsService], (service: TradeRequestsService) => {
    expect(service).toBeTruthy();
  }));
});
