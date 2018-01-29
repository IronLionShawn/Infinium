import { TestBed, inject } from '@angular/core/testing';

import { DataStore } from './data-store.service';

describe('DataStore', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DataStore]
    });
  });

  it('should be created', inject([DataStore], (service: DataStore) => {
    expect(service).toBeTruthy();
  }));
});
