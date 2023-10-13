import { TestBed } from '@angular/core/testing';
import { ProxySizeService } from './proxy-size.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('ProxySizeService', () => {
  let service: ProxySizeService;

  beforeEach(() => {
    TestBed.configureTestingModule({imports:[HttpClientTestingModule]});
    service = TestBed.inject(ProxySizeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
