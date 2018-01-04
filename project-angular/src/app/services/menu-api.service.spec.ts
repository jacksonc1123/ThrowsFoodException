import { TestBed, inject } from '@angular/core/testing';

import { MenuApiService } from './menu-api.service';

describe('MenuApiService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MenuApiService]
    });
  });

  it('should be created', inject([MenuApiService], (service: MenuApiService) => {
    expect(service).toBeTruthy();
  }));
});
