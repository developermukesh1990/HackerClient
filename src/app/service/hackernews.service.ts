import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../environment';
import { HackerNewsStory } from '../HackerNewsStory-model';


@Injectable({
  providedIn: 'root'
})
export class HackernewsService {
  public baseUrl:string;
  constructor(private _http: HttpClient) { 
    this.baseUrl= environment.baseURL;

  }

  getStories(): Observable<HackerNewsStory[]>{
    return this._http.get<HackerNewsStory[]>(this.baseUrl+'HackerNews/TopNews');

  }
}
