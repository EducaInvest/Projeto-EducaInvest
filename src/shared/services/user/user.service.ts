import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, map, pipe, tap, throwError } from 'rxjs';
import { IUser } from '../../model/IUser.models';
import { EstadoEnum } from '../../model/Enums/EState.enum';

@Injectable({ providedIn: 'root' })
export class UserService {

  constructor(private http: HttpClient) { }

    apiUrl = 'http://educainvest.somee.com/Usuarios';
    userUrl = 'http://educainvest.somee.com/Usuarios/AlterarCredenciais';
    // apiUrl = 'https://educainvestapi.azurewebsites.net/Usuarios';
    // apiUrl = 'http://localhost:5115/Usuarios';
    // userUrl = 'http://localhost:5115/Usuarios/AlterarCredenciais';

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: 'my-auth-token'
    })
  };

  postUser(user: IUser): Observable<IUser> {
    return this.http.post<IUser>(`${this.apiUrl}/Registrar`, user, this.httpOptions)
    .pipe(tap(console.log));
  }

  getUser(id: number): Observable<IUser> {
    return this.http.get<IUser>(`${this.apiUrl}/${id}`).pipe(
      catchError(this.handleError)
    );
  }

  updateUser(user: IUser): Observable<IUser> {

    return this.http.put<IUser>(`${this.userUrl}`, user, this.httpOptions).pipe(
      catchError(this.handleError),
      tap(console.log)
    );
  }

  changePassWord(email: string, passwordString: string): Observable<IUser> {
    const url = `${this.apiUrl}/AlterarSenha`; // Ajuste a URL conforme necessário
    const body = { email, passwordString };
    
    return this.http.put<IUser>(url, body, this.httpOptions).pipe(
      catchError(this.handleError),
      tap(console.log)
    );
  }

  private handleError(error: HttpErrorResponse): Observable<never> {
    console.error('Ocorreu um erro:', error);
    return throwError(error.message || 'Erro no servidor. Tente novamente mais tarde.');
  }




  // updateUserPhoto(userId: number, photo: File): Observable<any> {
  //   const formData: FormData = new FormData();
  //   formData.append('photo', photo);
  //   formData.append('userId', userId.toString());

  //   return this.http.post(`${this.apiUrl}/update-photo`, formData);
  // }

  //   getUserPhoto(userId: number): Observable<any> {
  //     return this.http.get(`${this.apiUrl}/users/${userId}/photo`);
  //   }

  //   updateUserPhoto(userId: number, photo: File): Observable<any> {
  //     const formData: FormData = new FormData();
  //     formData.append('photo', photo);

  //     return this.http.post(`${this.apiUrl}/users/${userId}/photo`, formData);
  //   }
  // }

}

