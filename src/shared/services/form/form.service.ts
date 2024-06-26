import { Injectable } from '@angular/core';
import { Observable, map, tap } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { IProject } from '../../model/IProject.models';

@Injectable({ providedIn: 'root' })

export class FormService {


  apiUrl = 'http://educainvest.somee.com/api/Projeto';
  // apiUrl = 'https://educainvestapi.azurewebsites.net/api/Projeto';
  // apiUrl = 'http://localhost:5251/api/Projeto';

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
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
      // Aqui, você pode definir uma data padrão ou lidar com o erro de outra forma
      dataPublicacao = new Date().toISOString(); // Define a data atual como padrão
    }

    const projectToSend = {
      ...projectWithoutId,
      dataPublicacao // Converte Date para string no formato ISO 8601
    };

    console.log("Enviando projeto:", projectToSend);
    return this.http.post<IProject>(`${this.apiUrl}/addProjeto`, projectToSend, this.httpOptions)
      .pipe(tap(console.log));
  }

  getProject(id: number): Observable<IProject> {
    return this.http.get<IProject>(`${this.apiUrl}/${id}`);
  }

  getAllProject(): Observable<IProject> {
    return this.http.get<IProject>(`${this.apiUrl}`);
  }

  getProjectByUser(usuarioId: number): Observable<IProject[]> {
    return this.http.get<IProject[]>(`http://localhost:5251/api/Projeto/GetByPerfil/${usuarioId}`)
    // return this.http.get<IProject[]>(`http://educainvest.somee.com/api/Projeto/GetByPerfil/${usuarioId}`)
      .pipe(
        map(projects => projects.map(this.convertToDate)),
        tap(console.log)
      );
  }

  deleteProject(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`, this.httpOptions)
      .pipe(tap(() => console.log(`Projeto com ID=${id} deletado`)));
  }

  updateProject(project: IProject): Observable<IProject> {
    return this.http.put<IProject>(this.apiUrl, project, this.httpOptions)
      .pipe(tap(() => console.log('Dados do projeto atualizados com sucesso!')));

  }
}