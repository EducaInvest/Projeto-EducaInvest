import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, ReplaySubject, catchError, map, pipe, take, tap, throwError } from 'rxjs';
import { IUser } from '../../model/IUser.models';
import { Router } from '@angular/router';
import { ILoginUser } from '../../model/IUserLogin.models';


@Injectable({ providedIn: 'root' })
export class UserService {
  // private currentUserSource = new ReplaySubject<IUser>(1);


  constructor(private http: HttpClient, private route:Router) { }

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

  postUser(user: IUser): Observable<IUser> {
    const  usuario  = user;
    return this.http.post<IUser>('http://educainvest.somee.com/Usuarios/Registrar', usuario, this.httpOptions)
    .pipe(tap(console.log));
    
  }

  veriferUser(model: ILoginUser): Observable<ILoginUser>{
    return this.http.post<ILoginUser>(`${this.apiUrl}/Verificar`, model).pipe(
      tap(console.log),
      // take(1),
      // map((response: IUser) => {
      //   const user = response;
      //   if (user) {
      //     this.setCurrentUser(user)
      //   }
      // })
    )
  }

  verificarUsuario(login: any): Observable<any> {
    const url = `${this.apiUrl}/Verificar`;
    const headers = new HttpHeaders({'Content-Type': 'application/json'});

    return this.http.post<any>(url, login, { headers })
      .pipe(
        catchError(this.handleError)
      );
  }

  // public setCurrentUser(user: IUser): any {
  //   localStorage.setItem('user', JSON.stringify(user));
  //   this.currentUserSource.next(user);
  // }

  acessHome(){
    this.route.navigateByUrl('/index/index/home')
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

