import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ApiServiceService {
base_Url = 'http://localhost:3000';

  constructor(private http: HttpClient) { }

  post(url: string  , body: any) {
    return this.http.post<any[]>(this.base_Url + url , body).pipe(map( data => data ));
  }

  get(url: string) {
   return this.http.get<any[]>(this.base_Url + url).pipe(map( data => data ));
  }
  delete(url: string) {
    return this.http.delete(this.base_Url + url).pipe(map( data => data ));
  }
}
