import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { ApiServiceBase } from './api.service.model'; 
import { ITodo } from '../models/todo.interface';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService implements ApiServiceBase {
  url = "http://localhost:3000/todos";

  constructor(private http: HttpClient) { }

  getTodos(): Observable<ITodo[]> {
    return this.http.get<ITodo[]>(this.url);
  }
  createTodo(todo: ITodo): Observable<ITodo> {
   return this.http.post<ITodo>(this.url, todo);
  }
  deleteTodo(todo: ITodo): Observable<any> {
    const options = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      }),
      body: todo,
    };
    return this.http.delete(this.url, options);
  }
}
