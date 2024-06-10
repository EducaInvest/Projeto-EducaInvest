import { Injectable } from '@angular/core';
// import { HttpService } from '../http/http.service';
import { Observable, map, pipe, tap } from 'rxjs';
import { IProject } from '../../../shared/model/IProject.models';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { IUser } from '../../model/IUser.models';

@Injectable({ providedIn: 'root' })
export class FormService {

  constructor(private http: HttpClient) { }

  apiUrl = 'http://localhost:5115/Projeto';
  // apiUrlUser = 'http://localhost:5115/Usuarios/4';

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };

  // Função para converter a string de data recebida da API para um objeto Date
  private convertToDate(project: any): IProject {
    return {
      ...project,
      dataPublicacao: new Date(project.dataPublicacao)
    };
  }
  // postForm(project: IProject): Observable<IProject> {
  //   console.log("Enviando projeto:", project);
  //   return this.http.post<IProject>(this.apiUrl, project, this.httpOptions)
  //   .pipe(tap(console.log));
  // }

  postForm(project: IProject): Observable<IProject> {
    const { id, ...projectWithoutId } = project; // Remove `id` se existir
  
    // Converte dataPublicacao para um objeto Date, se ainda não for
    const projectToSend = {
      ...projectWithoutId,
      dataPublicacao: new Date(projectWithoutId.dataPublicacao).toISOString() // Converte Date para string no formato ISO 8601
    };
    
    console.log("Enviando projeto:", projectToSend);
    return this.http.post<IProject>(this.apiUrl, projectToSend, this.httpOptions)
      .pipe(tap(console.log));
  }

  postPhoto(project: IProject): Observable<IProject> {
    return this.http.post<IProject["fotoProjeto"]>(this.apiUrl, project, this.httpOptions)
    .pipe(tap(console.log));
  }

  getProjectByUser(usuarioId:number): Observable<IProject[]> {
    return this.http.get<IProject[]>(`http://localhost:5115/Projeto/usuario/${usuarioId}`)
      .pipe(
        map(projects => projects.map(this.convertToDate)),
        tap(console.log)
      );
  }
}

