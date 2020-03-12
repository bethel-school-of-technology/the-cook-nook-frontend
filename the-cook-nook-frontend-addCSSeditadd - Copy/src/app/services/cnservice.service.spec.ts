import { TestBed } from '@angular/core/testing';

import {cookNService} from './cnservice.service';

describe('cookNService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: cookNService = TestBed.get(cookNService);
    expect(service).toBeTruthy();
  });
});
