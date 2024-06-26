import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { EMPTY, Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { ToastrService } from 'ngx-toastr';
import { IProject } from '../model/IProject.models';
import e from 'express';
import { error } from 'console';


@Injectable({
  providedIn: 'root'
})
export class ProjetoService {

  private URL: string = 'http://educainvest.somee.com/api/Projeto/addProjeto'

  constructor(private http: HttpClient, private toastr: ToastrService) { }


  // getAll(): Observable<IProject[]> {
  //   return this.http.get<IProject[]>(this.URL).pipe(
  //     map(retorno => retorno),
  //     catchError(erro => this.exibirErro(erro))
  //   );
  // }

  /*getByName(name: string): Observable<IProject> {
    return this.http.get<IProject[]>(`${this.URL}/${name}`).pipe(
      map(retorno => retorno),
      catchError(erro => this.exibirErro(erro))
    );
  }*/

  addProject(project: IProject): Observable<IProject>{
    return this.http.post<IProject>(this.URL, project).pipe(
      map(retorno => retorno),
    );

    /*atualizar(projeto: IProject): Observable<IProject>{
      return this.http.put<IProject>(`${this.URL}/${projeto.id}`, produto).pipe(
        map(retorno => retorno),
        catchError(erro => this.exibirErro(erro))
      );
    }*/

    /*excluir(id: number): Observable<any>{
      return this.http.delete<any>(`${this.URL}/${id}`).pipe(
        map(retorno => retorno),
        catchError(erro => this.exibirErro(erro))
      );
    }*/

    // exibirErro(e: any):Observable<any>{
    //   this.exibirMensagem('Erro!', 'Não foi possível realizer a operação', 'toast-error');
    // }

    
    // exibirMensagem(titulo: string, mensagem: string, tipo: string):void{
    //   this.toastr.show(mensagem, titulo, {closeButton:true, progressBar:true}, tipo);
    // }
  }
}
