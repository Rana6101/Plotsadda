import { TestBed } from '@angular/core/testing';

import { DashboarServiceService } from './dashboar-service.service';

describe('DashboarServiceService', () => {
  let service: DashboarServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DashboarServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
