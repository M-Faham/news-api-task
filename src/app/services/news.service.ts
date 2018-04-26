import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { IArticles } from '../articles';
import { HttpErrorResponse } from '@angular/common/http';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

@Injectable()
export class NewsService {
  private _apiUrl = 'https://newsapi.org/v2/top-headlines?sources=google-news&apiKey=33ba70d6367648b49a76910dfad62ad4';

  constructor(private _http: HttpClient) { } // Injecting the service with HttpClient Instance

  getNews(): Observable<any> { // returns a Json Object
    return this._http.get(this._apiUrl)     // Get the object form the Api
      .catch(this.errorHandle); // in case og an error happens
  }
  errorHandle(error: HttpErrorResponse) { // returns an error message
    return Observable.throw(error.message || 'Server-Side Error');
  }



}
