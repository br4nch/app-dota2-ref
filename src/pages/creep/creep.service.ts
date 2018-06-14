import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Creep } from './creep';
import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx';
@Injectable()
export class CreepService {
  private creepUrl = 'assets/api/creep/creep.json';

  constructor(private http: Http) { }
  getCreeps(): Observable<Creep[]> {
    return this.http.get(this.creepUrl)
      .map((response: Response) => response.json())
      .catch(this.handleError);
  }
  private handleError(error: Response) {
    return Observable.throw(error.json().error || 'Server error');
  }
}