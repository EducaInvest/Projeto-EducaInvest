import { Injectable } from '@angular/core';
import { Observable, map, tap } from 'rxjs';
import { IProject } from '../../../shared/model/IProject.models';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({ providedIn: 'root' })
export class FormService {

  private apiUrl = 'http://educainvest.somee.com/api/Projeto';
  // private apiUrl = 'https://educainvestapi.azurewebsites.net/api/Projeto';
  // private apiUrl = 'http://localhost:5115/api/Projeto';

    httpOptions = {
      headers: new HttpHeaders({'Content-Type': 'application/json', })
    };
  constructor(private http: HttpClient) { }

  // Função para converter a string de data recebida da API para um objeto Date
  private convertToDate(project: any): IProject {
    return {
      ...project,
      dataPublicacao: new Date(project.dataPublicacao)
    };
  }

  postForm(project: IProject): Observable<IProject> {
    const { id, ...projectWithoutId } = project; // Remove `id` se existir

    let dataPublicacao;
    try {
      dataPublicacao = new Date(projectWithoutId.dataPublicacao).toISOString();
    } catch (error) {
      console.error('Data de publicação inválida:', projectWithoutId.dataPublicacao);
      dataPublicacao = new Date().toISOString(); // Define a data atual como padrão
    }

    const projectToSend = {
      ...projectWithoutId,
      dataPublicacao // Converte Date para string no formato ISO 8601
    };

    console.log("Enviando projeto:", projectToSend);
    return this.http.post<IProject>('/api/Projeto/addProjeto', projectToSend, this.httpOptions)
      .pipe(tap(console.log));
  }


  postPhoto(project: IProject): Observable<IProject> {
    return this.http.post<IProject["fotoProjeto"]>(this.apiUrl, project, this.httpOptions)
      .pipe(tap(console.log));
  }

  getProjectByUser(usuarioId: number): Observable<IProject[]> {
    // return this.http.get<IProject[]>(`http://localhost:5115/api/Projeto/GetByPerfil/${usuarioId}`)
    return this.http.get<IProject[]>(`http://educainvest.somee.com/api/Projeto/GetByPerfil/${usuarioId}`)
      .pipe(
        map(projects => projects.map(this.convertToDate)),
        tap(console.log)
      );
  }

  deleteProject(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`, this.httpOptions)
      .pipe(tap(() => console.log(`Projeto com ID=${id} deletado`)));
  }
}


