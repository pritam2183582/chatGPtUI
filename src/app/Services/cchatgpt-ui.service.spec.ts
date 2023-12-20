import { TestBed } from '@angular/core/testing';

import { CchatgptUiService } from './cchatgpt-ui.service';

describe('CchatgptUiService', () => {
  let service: CchatgptUiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CchatgptUiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
