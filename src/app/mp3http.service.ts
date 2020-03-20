import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { AdminLocations } from './admin-locations';
import { Observable } from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
};

@Injectable({
  providedIn: 'root'
})
export class Mp3httpService {

  constructor(private http: HttpClient) { }

  getMp3s(): any {
    const mp3s: object = this.http.get('/api/api/mp3s', httpOptions);

    return mp3s;
  }

  // adminMp3s(locations: string[]): Observable<any> {
  // adminMp3s(adminLocs: AdminLocations): Observable<HttpResponse<AdminLocations>> {
  adminMp3s(adminLocs: AdminLocations): Observable<HttpResponse<AdminLocations>> {
    // const adminLocs: AdminLocations = new AdminLocations();
    // adminLocs.Locations = locations;

    const jsonData: string = JSON.stringify(adminLocs);

    console.log(jsonData);

    const httpHeaders = new HttpHeaders({
      'Content-Type': 'application/json'
    });

    const httpPostOptions = {
      headers: httpHeaders,
      observe: 'body'
    };

    // Params: URL, body, options.
    const result: Observable<HttpResponse<AdminLocations>> = this.http.post<AdminLocations>(
        '/api/api/mp3s',
        adminLocs,
        {
          headers: httpHeaders,
          observe: 'response'
        });

    return result;
  }
}
