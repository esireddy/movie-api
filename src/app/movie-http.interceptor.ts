import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpHeaders,
  HttpContextToken,
  HttpContext
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

const MovieDB_API = new HttpContextToken<boolean>(() => false);
const RestDB_API = new HttpContextToken<boolean>(() => false);

export function movieDBAPI() {
  return new HttpContext().set(MovieDB_API, true);
}

export function restDBAPI() {
  return new HttpContext().set(RestDB_API, true);
}

@Injectable()
export class MovieHttpInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {

    if(request.context.get(MovieDB_API)) {
        const req = request.clone({
            params : request.params.set("api_key", environment.api_key)
                                  .set("language", "en-US")
          });

          return next.handle(req);
    }
    else if(request.context.get(RestDB_API)) { 
        const req = request.clone({
          headers : request.headers.set("x-apikey", environment.x_apikey)
        });

      return next.handle(req);
    }

    return next.handle(request);
  }
}
