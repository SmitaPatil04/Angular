import { TestBed } from '@angular/core/testing';

import { SigninuserService } from './signinuser.service';

describe('SigninuserService', () => {
  let service: SigninuserService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SigninuserService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
