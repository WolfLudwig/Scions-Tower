import { TestBed } from '@angular/core/testing';

import { ScionService } from './scion.service';

describe('ScionService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ScionService = TestBed.get(ScionService);
    expect(service).toBeTruthy();
  });
});
