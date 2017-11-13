import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class TodoService {

  constructor(private http: HttpClient) { }

  public getTodos(): Observable<any[]> {
    return this.http.get<Array<any>>('https://jsonplaceholder.typicode.com/todos');
  }

}
