import { TestBed } from '@angular/core/testing';

import { NgxBlockUiService } from './ngx-block-ui.service';

describe('NgxBlockUiService', () => {
  let service: NgxBlockUiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NgxBlockUiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
