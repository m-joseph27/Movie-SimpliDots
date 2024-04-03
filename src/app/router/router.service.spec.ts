import { TestBed } from '@angular/core/testing';

import { RoutingModule } from './router.module';

describe('RouterService', () => {
  let service: RoutingModule;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RoutingModule);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
