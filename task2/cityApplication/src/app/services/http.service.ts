import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { City } from '../city';

@Injectable({
  providedIn: 'root',
})
export class HttpService {
  constructor(private http: HttpClient) {}

  getAllCities(): Observable<City[]> {
    return this.http.get<City[]>('http://localhost:4200/cities');
  }

  getCity(id: number) {
    return this.http.get<City>('http://localhost:4200/cities/' + id);
  }

  updateCity(id: number, params: any) {
    return this.http.put('http://localhost:4200/cities/' + id, params);
  }
}
