import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Hero } from './hero';
import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx';
@Injectable()
export class HeroService {
  private heroUrl = 'assets/api/hero/hero.json';

  constructor(private http: Http) { }
  getHeroes(): Observable<Hero[]> {
    return this.http.get(this.heroUrl)
      .map((response: Response) => response.json())
      .catch(this.handleError);
  }
  private handleError(error: Response) {
    return Observable.throw(error.json().error || 'Server error');
  }
}