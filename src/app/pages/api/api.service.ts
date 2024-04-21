import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IProject } from '../../../shared/model/IProject.models';


@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  //add projetc
  addproject(data:IProject) {
    return this.http.post<IProject>("http://localhost:3000/posts", data)
  }
}

