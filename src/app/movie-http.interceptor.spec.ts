import { TestBed } from '@angular/core/testing';

import { MovieHttpInterceptor } from './movie-http.interceptor';

describe('MovieHttpInterceptor', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      MovieHttpInterceptor
      ]
  }));

  it('should be created', () => {
    const interceptor: MovieHttpInterceptor = TestBed.inject(MovieHttpInterceptor);
    expect(interceptor).toBeTruthy();
  });
});
