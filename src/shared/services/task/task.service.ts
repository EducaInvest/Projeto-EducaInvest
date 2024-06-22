import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap, catchError, throwError } from 'rxjs';
import { ITask } from '../../model/ITask.models';

@Injectable({ providedIn: 'root' })

export class TaskService {

    private apiUrl = 'http://educainvest.somee.com/api/Atividade';
    // private apiUrl = 'https://educainvestapi.azurewebsites.net/api/Atividade';
    // private apiUrl = 'http://localhost:5115/api/Atividade';

    constructor(private http: HttpClient) { }

    httpOptions = {
        headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };

    postTask(task: ITask): Observable<ITask> {
        return this.http.post<ITask>(this.apiUrl, task, this.httpOptions)
            .pipe(tap(console.log));
    }

    getUser(id: number): Observable<ITask> {
        return this.http.get<ITask>(`${this.apiUrl}/${id}`).pipe(
            catchError(this.handleError)
        );
    }

    private handleError(error: HttpErrorResponse): Observable<never> {
        console.error('Ocorreu um erro:', error);
        return throwError(error.message || 'Erro no servidor. Tente novamente mais tarde.');
    }

    deleteProject(id: number): Observable<void> {
        return this.http.delete<void>(`${this.apiUrl}/${id}`, this.httpOptions)
            .pipe(tap(() => console.log(`Cronograma com ID=${id} deletado`)));
    }




}