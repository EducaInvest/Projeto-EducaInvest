import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map, pipe, tap } from 'rxjs';
import { IUser } from '../../model/IUser.models';

@Injectable({ providedIn: 'root' })
export class UserService {

  constructor(private http: HttpClient) { }

  apiUrl = 'http://localhost:5115/Usuarios/4';

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };

  getUser(): Observable<IUser> {
    return this.http.get<IUser>(this.apiUrl)
  }

  postUser(user: IUser): Observable<IUser> {
    const  usuario  = user;
    return this.http.post<IUser>('http://localhost:5115/Usuarios/Registrar', usuario, this.httpOptions)
    .pipe(tap(console.log));
  }

}
