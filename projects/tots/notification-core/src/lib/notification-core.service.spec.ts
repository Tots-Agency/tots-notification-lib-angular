import { TestBed } from '@angular/core/testing';

import { NotificationCoreService } from './notification-core.service';

describe('NotificationCoreService', () => {
  let service: NotificationCoreService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NotificationCoreService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
