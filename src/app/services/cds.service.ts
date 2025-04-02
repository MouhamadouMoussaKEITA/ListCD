import { Injectable } from '@angular/core';
import { CD } from '../Models/cd.model';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CdsService {

  constructor(private http: HttpClient) { }

  getCds(): Observable<CD[]> {
    return this.http.get<CD[]>('http://localhost:3000/CD');
  }

  getCDById(id: number): Observable<CD> {
    return this.http.get<CD>('http://localhost:3000/CD/' + id);
  }

  addCD(nouvCD: CD): Observable<CD> {


    this.getCds().subscribe(cds => {
      let maxId = 0;
      cds.forEach(cd => { maxId = (cd.id > maxId ? cd.id : maxId); });
      nouvCD.id = maxId + 1;
      this.http.post<CD>('http://localhost:3000/CD', nouvCD);
    }
    );

    return this.getCds().pipe(
      switchMap(cds => {
        let maxId = 0;
        cds.forEach(cd => { maxId = (cd.id > maxId ? cd.id : maxId); });
        nouvCD.id = maxId + 1;
        return this.http.post<CD>('http://localhost:3000/CD', nouvCD);
      }
      ));

  };
}




