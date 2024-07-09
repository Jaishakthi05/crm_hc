import { TestBed } from '@angular/core/testing';

import { IndiaMartService } from './indiamart-lead.service';

describe('IndiamartLeadService', () => {
  let service: IndiaMartService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(IndiaMartService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
