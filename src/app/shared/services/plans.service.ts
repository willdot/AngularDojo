import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/map';

import { IPlan } from '../models/iplan';
import { AppConfig } from '../../app.config';

@Injectable()
export class PlansService {

  apiRoot: string;

  constructor(private _http: HttpClient, private config: AppConfig) { 
    this.apiRoot = config.getConfig('apiRoot');
  }


  /*getPlans(): Observable<IPlan> {
    return this._http.get<any>("http://localhost:3000/" + "plans")
      .do(data => {
        // Log, set flags, the data will not change if modified here
      })
      .catch(this.handleError);
  }*/

  getPlans(): Observable<IPlan> {
    return this._http.get<IPlan[]>(`${this.apiRoot}plans`)
      .do(data => { })
      .map(results => {
        return results.map(res => {
          let result: IPlan;
          result = {
            name: res.name,
            description: res.description,
            starting: res.starting,
            finishing: res.finishing,
            location: res.location,
            category: res.category,
            id: res.id
          }
          return result;
        })
      })
      .catch(this.handleError);
  }

  getCategories(): Observable<any> {
    return this._http.get<any>(`${this.apiRoot}categories`)
      .do(data => {
        // Log, set flags, the data will not change if modified here
      })
      .catch(this.handleError);
  }

  postPlan(plan: any): Observable<IPlan> {
    const body = JSON.stringify(plan);
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    const options = { headers: headers };
    return this._http.post<any>(`${this.apiRoot}plans`, body, options)
      .do(data => {
      })
      .catch(this.handleError);
  }

  private handleError(err: HttpErrorResponse) {
    console.log(err.message);
    return Observable.throw(err.message);
  }

}
