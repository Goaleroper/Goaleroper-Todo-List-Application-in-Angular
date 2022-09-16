import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Lists } from './main-list/items';

@Injectable({
  providedIn: 'root',
})
export class ListsService {
  URL: string = 'http://localhost:3000/api/lists';
  constructor(private http: HttpClient) {}

  getItems(): Observable<Lists[]> {
    return this.http.get<Lists[]>(this.URL);
  }

  getList(id: string): Observable<Lists[]> {
    return this.http.get<Lists[]>(this.URL + '/' + id);
  }

  getMainList(): Observable<any> {
    return this.http.get<Lists[]>('http://localhost:3000/api/mainList');
  }

  addList(list: Lists): Observable<any> {
    return this.http.post(this.URL, list);
  }

  deleteList(id: string): Observable<Lists[]> {
    return this.http.delete<Lists[]>(this.URL + '/' + id);
  }
}
