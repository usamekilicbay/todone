import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Todo } from 'src/app/models/Todo';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TodoClientService {
  constructor(
    private httpClient: HttpClient // @Inject('baseUrl') private baseUrL: string
  ) {}

  get(): Observable<Todo[]> {
    return this.httpClient.get<Todo[]>('https://localhost:7187/api/todos');
    // return this.httpClient.get<any>(`${this.baseUrL}todos/`);
  }
  post() {}
  put() {}
  delete() {}
}
