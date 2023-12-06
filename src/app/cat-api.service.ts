import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Cat } from './cat.model';

@Injectable({
  providedIn: 'root'
})
export class CatApiService {
  private apiUrl = 'https://freetestapi.com/api/v1/cats';

  constructor(private http: HttpClient) { }

  getCats(): Observable<Cat[]> {
    return this.http.get<Cat[]>(this.apiUrl);
  }
}