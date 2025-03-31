import { Injectable } from '@angular/core';
import { CD } from '../Models/cd.model';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CdsService {

  constructor(private http: HttpClient) { }

  getCds(): Observable<CD[]> {
    return this.http.get<CD[]>('https://localhost:3000/CD');
  }

  getCDById(id: number): Observable<CD> {
    return this.http.get<CD>('https://localhost:3000/CD/' + id);
  }

}