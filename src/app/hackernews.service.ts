import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { observableToBeFn } from 'rxjs/internal/testing/TestScheduler';
import { environment } from '../../environment';

@Injectable({
  providedIn: 'root'
})
export class HackernewsService {
  public baseUrl:string;
  constructor(private _http: HttpClient) { 
    this.baseUrl= environment.baseURL;

  }

  getStories(search:any): Observable<any[]>{
    let queryParams = new HttpParams();
    queryParams = queryParams.append('search', search);
    
    return this._http.get<any[]>(this.baseUrl+'HackerNews/Index', { params: queryParams });

  }
}
