import { TestBed } from '@angular/core/testing';

import { PetsService } from './pet.service';

describe('PetService', () => {
  let service: PetsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PetsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
