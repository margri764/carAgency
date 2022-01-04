import { TestBed } from '@angular/core/testing';

import { ZeromileCarsService } from './zeromile-cars.service';

describe('ZeromileCarsService', () => {
  let service: ZeromileCarsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ZeromileCarsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
