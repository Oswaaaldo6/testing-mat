import { TestBed } from '@angular/core/testing';

import { Data3aService } from './data3a.service';
import { HttpClientModule } from '@angular/common/http';

describe('Data3aService', () => {
  let service: Data3aService;

  beforeEach(() => {
    TestBed.configureTestingModule({imports:[HttpClientModule]});
    service = TestBed.inject(Data3aService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
