import { Injectable } from '@angular/core';
import { Member } from './models/member.model';
import { UtilitiesService } from './utilities.service';
import { DataService } from './data.service';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class MembersService {

	constructor(private utilitiesService: UtilitiesService, private dataService: DataService) {	}
	
	members: Member[] = [];
    membersWithUpcomingBirthday: Member[] = [];
    membersWithUpcomingWorkAnniversary: Member[] = [];
    membersWithBirthdayToday: Member[] = [];
    membersWithWorkAnniversaryToday: Member[] = [];
	
	loadMembers() {
		return Observable.create((observer) => {
			if(!(this.members.length > 0)){
				this.dataService.getMembersData().subscribe(
					(data) => {
						this.members = data;
						this.membersWithUpcomingBirthday = this.utilitiesService.getMembersWithUpcomingBirthday(this.members);
						this.membersWithUpcomingWorkAnniversary = this.utilitiesService.getMembersWithUpcomingWorkAnniversary(this.members);
						this.membersWithBirthdayToday = this.utilitiesService.getMembersWithBirthdayToday(this.members);
						this.membersWithWorkAnniversaryToday = this.utilitiesService.getMembersWithWorkAnniversaryToday(this.members);
						observer.next(this.members);
						observer.complete();
					},
					(err) => {
						console.log("Error: " + err);
						observer.error(new Error(err));
					}
				);
			}
			else{
				observer.next(this.members);
				observer.complete();
			}
		});
    }
}
