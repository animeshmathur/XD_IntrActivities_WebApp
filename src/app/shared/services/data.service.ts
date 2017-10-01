import { Injectable } from '@angular/core';

import { Http } from "@angular/http";
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class DataService {

    constructor(private http: Http) { }
	
    getMembersData(){
        return this.http.get('/api/getMembers')
        .map(response => response.json());
    }
	
	addMemberData(member){
		return this.http.post('/api/addMember', member)
		.map(response => response.json());
	}

	updateMemberData(member){
		return this.http.post('/api/updateMember', member)
		.map(response => response.json());
	}
	
	deleteMemberData(member){
		return this.http.delete('/api/deleteMember/?psaId=' + member.psaId)
		.map(response => response.json());
	}
}
