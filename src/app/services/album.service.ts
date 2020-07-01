import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class AlbumService {

  constructor(private http: HttpClient) { }

  getMeasures(): Observable<any> {
    //return this.http.get('https://my-json-server.typicode.com/lpascuazac/dbtest/measures');
    return this.http.get('http://aulal.org:1880/energy');
  }

  getDetail(id): Observable<any> {
    //return this.http.get('https://my-json-server.typicode.com/lpascuazac/dbtest/measures/' + id);
    return this.http.get('http://aulal.org:1880/energy/' + id);
  }
}