import { TestBed, inject } from '@angular/core/testing';

import { RequestClientService } from './request-client.service';

describe('RequestClientService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RequestClientService]
    });
  });

  it('should be created', inject([RequestClientService], (service: RequestClientService) => {
    expect(service).toBeTruthy();
  }));
});
