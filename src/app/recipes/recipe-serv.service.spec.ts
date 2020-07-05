import { TestBed } from '@angular/core/testing';

import { RecipeServService } from './recipe-serv.service';

describe('RecipeServService', () => {
  let service: RecipeServService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RecipeServService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
