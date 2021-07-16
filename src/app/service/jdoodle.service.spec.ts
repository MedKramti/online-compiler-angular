import { TestBed } from '@angular/core/testing';

import { JdoodleService } from './jdoodle.service';

describe('JdoodleService', () => {
  let service: JdoodleService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(JdoodleService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
