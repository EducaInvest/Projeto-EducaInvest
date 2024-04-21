import { HttpClient, HttpEventType, HttpHeaders, HttpParams, HttpRequest, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { filter, map, take } from 'rxjs/operators';
import { HttpOptions } from './http-options';
import { Observable } from 'rxjs';

@Injectable({providedIn: 'root'})
export class HttpService {
    constructor(private httpClient: HttpClient) { }

    get<T>(url: string, options?: HttpOptions): Observable<T>{
        return this.request('GET', url, options)
    }

    post<T>(url: string, options?: HttpOptions, body?: unknown): Observable<T>{
        return this.request('POST', url, options, body)
    }

    
    private request<T>(
        method: MethodType,
        url: string,
        options?: HttpOptions,
        body?: unknown
    ): Observable<T>{
        const init = options && {
            headers: options.headers && new HttpHeaders(options.headers),
            params: options.params && new HttpParams({ fromObject: options.params})
        };
        const req =  new HttpRequest(method, url, body, init);
        return this.httpClient.request(req).pipe(
                filter((event: any) => event.type === HttpEventType.Response),
                map((responseEvent: HttpResponse<any>) => responseEvent.body),
                take(1)
            );
    }

}

    type MethodType = 'GET' | 'POST' | 'PUT' | 'DELETE' |'PATCH'