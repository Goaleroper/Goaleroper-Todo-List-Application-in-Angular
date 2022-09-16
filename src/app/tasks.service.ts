import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Tasks } from './main-list/items';

@Injectable({
  providedIn: 'root',
})
export class TasksService {
  URL: string = 'http://localhost:3000/api/tasks';
  constructor(private http: HttpClient) {}

  getTasks(): Observable<any> {
    return this.http.get<Tasks[]>(this.URL);
  }

  getT(id: string): Observable<Tasks[]> {
    return this.http.get<Tasks[]>(this.URL + '/query/' + id);
  }

  getDoneTasks(): Observable<any> {
    return this.http.get<Tasks[]>('http://localhost:3000/api/compeleted');
  }

  getForEdit(id: string): Observable<any> {
    return this.http.get<Tasks[]>(this.URL + '/' + id);
  }

  addTask(task: Task): Observable<any> {
    return this.http.post(this.URL, task);
  }

  updateTask(task): Observable<Tasks[]> {
    return this.http.put<Tasks[]>(this.URL + '/' + task._id, task);
  }

  deleteTask(_id: number): Observable<Tasks[]> {
    return this.http.delete<Tasks[]>(this.URL + '/' + _id);
  }
}
