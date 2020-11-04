import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpResponse,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HTTP_INTERCEPTORS,
  HttpClient,
} from '@angular/common/http';
import { Observable, of, throwError } from 'rxjs';

@Injectable()
export class FakeBackendHttpInterceptor implements HttpInterceptor {
  constructor(private http: HttpClient) {}

  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    return this.handleRequests(request, next);
  }

  handleRequests(request: HttpRequest<any>, next: HttpHandler): any {
    const { url, method, body } = request;
    const cities = JSON.parse(localStorage.getItem('cities')) || [];
    const users = JSON.parse(localStorage.getItem('users')) || [];

    if (url.endsWith('/cities') && method === 'GET') {
      return of(new HttpResponse({ status: 200, body: cities }));
    }

    if (url.match(/\/cities\/\d+$/) && method === 'GET') {
      const cityId = +this.getCityId(url);
      const city = cities.find((c) => c.id == cityId);
      return of(new HttpResponse({ status: 200, body: city }));
    }

    if (url.match(/\/cities\/\d+$/) && method === 'PUT') {
      const params = body;
      const cityId = +this.getCityId(url);
      const city = cities.find((c) => c.id == cityId);
      Object.assign(city, params);
      localStorage.setItem('cities', JSON.stringify(cities));
      return of(new HttpResponse({ status: 200 }));
    }

    if (url.endsWith('/authenticate') && method === 'POST') {
      const { username, password } = body;
      const user = users.find(
        (x) => x.username === username && x.password === password
      );
      if (!user) return throwError('Username or password is incorrect');
      return of(
        new HttpResponse({
          status: 200,
          body: {
            id: user.id,
            username: user.username,
            password: user.password,
            token: 'jwt-fake-token',
          },
        })
      );
    }

    return next.handle(request);
  }

  getCityId(url) {
    const urlValue = url.split('/');
    return urlValue[urlValue.length - 1];
  }
}

export const FakeBackendProvider = {
  provide: HTTP_INTERCEPTORS,
  useClass: FakeBackendHttpInterceptor,
  multi: true,
};
