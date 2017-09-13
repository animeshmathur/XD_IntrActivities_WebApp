import { Injectable } from '@angular/core';

import { Http } from "@angular/http";
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class DataService {

    constructor(private http: Http) { }
	
    getMembersData(){
        return this.http.get('/json/ux_members.json')
        .map(response => response.json());
    }
}
