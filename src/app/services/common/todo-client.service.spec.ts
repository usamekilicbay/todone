import { TestBed } from '@angular/core/testing';

import { TodoClientService } from './todo-client.service';

describe('TodoClientService', () => {
  let service: TodoClientService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TodoClientService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
