import { TestBed } from '@angular/core/testing';

import { FormateursService } from './formateurs.service';

describe('FormateursService', () => {
  let service: FormateursService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FormateursService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
