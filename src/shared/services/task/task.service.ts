import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap, catchError, throwError } from 'rxjs';
import { ITask } from '../../model/ITask.models';
import { ISchedule } from '../../model/ISchedule.models';

@Injectable({ providedIn: 'root' })

export class TaskService {

    //  apiUrl = 'http://educainvest.somee.com/api/Atividade';
    // apiUrl = 'https://educainvestapi.azurewebsites.net/api/Atividade';
    apiUrl = 'http://localhost:5251/api/Atividade';

    constructor(private http: HttpClient) { }

    httpOptions = {
        headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };


    getUser(id: number): Observable<ITask> {
        return this.http.get<ITask>(`${this.apiUrl}/${id}`);
    }

    getTasksBySchedule(cronogramaId: number): Observable<ITask[]> {
      return this.http.get<ITask[]>(`${this.apiUrl}/GetAtividadeByCronograma/${cronogramaId}`);
    }
  
    postTask(task: ITask): Observable<ITask> {
      return this.http.post<ITask>(this.apiUrl, task);
    }
  
    deleteTask(id: number): Observable<void> {
      return this.http.delete<void>(`${this.apiUrl}/${id}`);
    }



}