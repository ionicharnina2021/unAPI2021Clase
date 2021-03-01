import { TestBed } from '@angular/core/testing';

import { GenteService } from './gente.service';

describe('GenteService', () => {
  let service: GenteService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GenteService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
