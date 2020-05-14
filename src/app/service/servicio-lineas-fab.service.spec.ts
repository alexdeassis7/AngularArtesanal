import { TestBed } from '@angular/core/testing';

import { ServicioLineasFabService } from './servicio-lineas-fab.service';

describe('ServicioLineasFabService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ServicioLineasFabService = TestBed.get(ServicioLineasFabService);
    expect(service).toBeTruthy();
  });
});
