import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

const Users_URL = 'http://localhost:4200/api/users/';
@Injectable({
    providedIn: 'root'
})
export class UsersService {

  constructor(private http: HttpClient) { }

  public getUsersList(): Observable<any> {
    return this.http.get(Users_URL+"list", {responseType: 'json'}).pipe(map(res => { 
      return res;
    }));
  }

  public createUser(data:any): Observable<any> {
    return this.http.post(Users_URL+"signup", data ,{responseType: 'json'}).pipe(map(res => { 
      return res;
    }));
  }
}
// /api/users