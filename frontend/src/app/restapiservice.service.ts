import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'

import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class RESTAPIServiceService {

  constructor(private http: HttpClient) { }

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

  public getMsg() {
    //let url = 'https://localhost:3000/api/getMsg';
    let url = "https://melstolit-dargox-wqwrxp4f97qv-3000.githubpreview.dev/api/getMsg";
    return this.http.get(url);
  }
  
}
