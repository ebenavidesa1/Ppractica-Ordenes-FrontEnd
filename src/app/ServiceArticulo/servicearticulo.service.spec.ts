import { TestBed } from '@angular/core/testing';

import { ServicearticuloService } from './servicearticulo.service';

describe('ServicearticuloService', () => {
  let service: ServicearticuloService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServicearticuloService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
