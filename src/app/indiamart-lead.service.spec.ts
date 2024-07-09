import { TestBed } from '@angular/core/testing';

import { IndiamartLeadService } from './indiamart-lead.service';

describe('IndiamartLeadService', () => {
  let service: IndiamartLeadService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(IndiamartLeadService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
