import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { environment } from '../../environments/environment';
import 'rxjs/add/operator/map'


@Injectable()
export class TodoService {

  constructor(private http: HttpClient) { }

  public getTodos(): Observable<any[]> {
    return this.http.get<Array<any>>(environment.apiUrl).map((res) => {
        console.log(res);
        return res;
    });
  }
}
