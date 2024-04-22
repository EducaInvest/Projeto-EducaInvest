import { Injectable } from '@angular/core';
// import { HttpService } from '../http/http.service';
import { Observable, map, tap } from 'rxjs';
import { IProject } from '../../../shared/model/IProject.models';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({ providedIn: 'root' })
export class FormService {

  constructor(private http: HttpClient) { }

  apiUrl = 'http://localhost:5115/api/Projeto';
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };

  postForm(project: IProject): Observable<IProject> {
    return this.http.post<IProject>(this.apiUrl, project, this.httpOptions)
  }

  getForm(): Observable<IProject[]> {
    return this.http.get<IProject[]>(this.apiUrl)
  }

  // getForm(): Observable<IProject[]> {
  //     return this.http.get('http://educainvest.somee.com');
  // }

}

