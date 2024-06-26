import { TestBed } from '@angular/core/testing';

import { ContactWayService } from './contact-way.service';

describe('ContactWayService', () => {
  let service: ContactWayService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ContactWayService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
