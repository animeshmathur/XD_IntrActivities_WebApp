import { Injectable } from '@angular/core';
import { Member } from '../models/member.model';
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

	addMember(member: Member){
		return Observable.create((observer) => {
			this.dataService.addMemberData(member).subscribe(
				(data) => {
					if(data.status == "success"){
						this.members.push(member);
					}
					observer.next(data);
					observer.complete();
				},
				(err) => {
					console.log("Error: " + err);
					observer.error(new Error(err));
				}
			);	
		});
	}

	updateMember(index: number, member: Member){
		return Observable.create((observer) => {
			this.dataService.updateMemberData(member).subscribe(
				(data) => {
					if(data.status == "success"){
						this.members[index] = member;
					}
					observer.next(data);
					observer.complete();
				},
				(err) => {
					console.log("Error: " + err);
					observer.error(new Error(err));
				}
			);	
		});
	}

	deleteMember(member: Member){
		return Observable.create((observer) => {
			this.dataService.deleteMemberData(member).subscribe(
				(data) => {
					if(data.status == "success"){
						let indexOfMember = this.members.indexOf(this.members.filter(function(m){return member.psaId == m.psaId})[0]);
						this.members.splice(indexOfMember, 1);
					}
					observer.next(data);
					observer.complete();
				},
				(err) => {
					console.log("Error: " + err);
					observer.error(new Error(err));
				}
			);	
		});
	}
}
