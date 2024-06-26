import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ISchedule } from '../../model/ISchedule.models';
import { Observable, catchError, tap, throwError } from 'rxjs';

@Injectable({ providedIn: 'root' })

export class ScheduleService {

    constructor(private http: HttpClient) { }

    apiUrl = 'http://educainvest.somee.com/api/Cronograma';
    // apiUrl = 'https://educainvestapi.azurewebsites.net/Usuarios';
    // apiUrl = 'http://localhost:5251/Cronogrma';

    httpOptions = {
        headers: new HttpHeaders({
            'Content-Type': 'application/json',
            Authorization: 'my-auth-token'
        })
    };

    getAllSchedules(): Observable<ISchedule[]> {
        return this.http.get<ISchedule[]>(this.apiUrl);
      }
    
      getScheduleById(id: number): Observable<ISchedule> {
        return this.http.get<ISchedule>(`${this.apiUrl}/${id}`);
      }
    
      postSchedule(schedule: ISchedule): Observable<ISchedule> {
        return this.http.post<ISchedule>(this.apiUrl, schedule);
      }
    
      deleteSchedule(id: number): Observable<void> {
        return this.http.delete<void>(`${this.apiUrl}/${id}`);
      }
}
