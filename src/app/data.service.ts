import { Injectable } from '@angular/core';
// для выполнения запросов
import { HttpClient, HttpHeaders } from '@angular/common/http';
// поддержка асинхронных запросов
import { Observable } from 'rxjs';
import { Summary } from './model/summary';
@Injectable({
  providedIn: 'root'
})
export class DataService {
  summarysUrl = "https://api.hh.ru/vacancies";
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  };
  constructor(private http: HttpClient) { }
  getSummarys(): Observable<Summary[]> {
    return this.http.get<Summary[]>(this.summarysUrl);
  }
}
