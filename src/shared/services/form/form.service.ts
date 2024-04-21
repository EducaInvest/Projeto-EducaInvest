import { Injectable } from '@angular/core';
import { HttpService } from '../http/http.service';
import { Observable, map, tap } from 'rxjs';
import { IProject } from '../../../shared/model/IProject.models';
import { HttpClient } from '@angular/common/http';

@Injectable({ providedIn: 'root' })
export class FormService {
    constructor(private http: HttpClient) { }

    // getForm(): Observable<IProject[]> {
    //     return this.http.get('http://educainvest.somee.com');
    // }

    getForm(): Observable<IProject[]> {
        return this.http.get<IProject[]>('http://localhost:5115/api/Projeto').pipe(
         tap(console.log)
        //   catchError(erro => this.exibirErro(erro))
        );
      } 
}

