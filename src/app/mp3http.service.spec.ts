import { TestBed } from '@angular/core/testing';

import { Mp3httpService } from './mp3http.service';

describe('Mp3httpService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: Mp3httpService = TestBed.get(Mp3httpService);
    expect(service).toBeTruthy();
  });
});
