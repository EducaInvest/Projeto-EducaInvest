import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ISchedule } from '../../model/ISchedule.models';
import { Observable, catchError, tap, throwError } from 'rxjs';

@Injectable({ providedIn: 'root' })

export class ScheduleService {

    constructor(private http: HttpClient) { }

    apiUrl = 'http://educainvest.somee.com/api/Cronograma';
    // apiUrl = 'https://educainvestapi.azurewebsites.net/Usuarios';
    // apiUrl = 'http://localhost:5115/Usuarios';
    // userUrl = 'http://localhost:5115/Usuarios/AlterarCredenciais';

    httpOptions = {
        headers: new HttpHeaders({
            'Content-Type': 'application/json',
            Authorization: 'my-auth-token'
        })
    };

    getAllSchedule(): Observable<ISchedule[]> {
        return this.http.get<ISchedule[]>(this.apiUrl);
    }

    postSchedule(schedule: ISchedule): Observable<ISchedule> {
        return this.http.post<ISchedule>(this.apiUrl, schedule);
    }

    deleteSchedule(id: number): Observable<void> {
        return this.http.delete<void>(`${this.apiUrl}/${id}`);
    }

    // private handleError(error: any): Observable<never> {
    //     console.error('Ocorreu um erro:', error);
    //     throw new Error('Erro ao se comunicar com a API');
    // }

}
