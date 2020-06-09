import { TestBed } from '@angular/core/testing';

import { RepositorioServiceService } from './repositorio-service.service';

describe('RepositorioServiceService', () => {
  let service: RepositorioServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RepositorioServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
