import { TestBed, inject } from '@angular/core/testing';

import { DishreviewService } from './dishreview.service';

describe('DishreviewService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DishreviewService]
    });
  });

  it('should be created', inject([DishreviewService], (service: DishreviewService) => {
    expect(service).toBeTruthy();
  }));
});
