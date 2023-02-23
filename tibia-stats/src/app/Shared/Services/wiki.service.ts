import { Injectable } from "@angular/core"
import { HttpClient, HttpHeaders } from "@angular/common/http"

import { environment } from "src/environments/environment"

@Injectable({
    providedIn: 'root'
})

export class WikiService {

    constructor(
        private http: HttpClient
    ) {}

    getItems() {
        /*let headers = new HttpHeaders({'Access-Control-Allow-Origin': '*', 'Access-Control-Request-Methods': 'GET'});
        //headers.set('Host', 'developer.mozilla.org');
        console.log(headers);*/
        return this.http.get(`${environment.tibiawikiUrl}/items`);
    }
}