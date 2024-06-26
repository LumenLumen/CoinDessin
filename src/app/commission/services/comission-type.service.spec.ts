import { TestBed } from '@angular/core/testing';

import { ComissionTypeService } from './comission-type.service';

describe('ComissionTypeService', () => {
  let service: ComissionTypeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ComissionTypeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
