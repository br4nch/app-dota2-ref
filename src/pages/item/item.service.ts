import { Injectable } from '@angular/core';
import { Http, Response } from "@angular/http";
import { Item } from "./item";
import { Observable } from "rxjs/Observable";
import "rxjs/Rx";
@Injectable()
export class ItemService {
    private itemUrl = "assets/api/item/item.json";

    constructor(private http: Http) { }
    getItems(): Observable<Item[]> {
        return this.http.get(this.itemUrl)
            .map((response: Response) => response.json())
            .catch(this.handleError);
    }
    private handleError(error: Response) {
        return Observable.throw(error.json().error || 'Server error')
    }
}