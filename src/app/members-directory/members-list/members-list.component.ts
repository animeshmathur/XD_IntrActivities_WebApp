import { Component, OnInit } from '@angular/core';
import { MembersService } from '../../shared/services/members.service';
import { Member } from '../../shared/models/member.model';

@Component({
  selector: 'xd-members-list',
  templateUrl: './members-list.component.html',
  styleUrls: ['./members-list.component.css']
})
export class MembersListComponent implements OnInit {

  	members : Member[];
	isEditing = [];
	hasFeedback: boolean = false;
	feedbackMessage: string;
    
    constructor(private membersService: MembersService) {
		
	}
    
    ngOnInit() {
        this.membersService.loadMembers().subscribe(() => {
			this.members = this.membersService.members;
			this.members.forEach(() => this.isEditing.push(false));
		});
    }
	
	closeEditing(i: number){
		this.isEditing[i] = false;
	}
	
	updateMemberData(index: number, newMemberData: Member){
		this.members[index] = newMemberData;
	}
	
	deleteMember(member: Member){
		this.membersService.deleteMember(member).subscribe(
			(data) => {
				this.setFeedback(data);
			},
			(err) => {
				this.setFeedback(err);
			}
		);
	}
	
	
	setFeedback(msg: string){
		this.hasFeedback = true;
		this.feedbackMessage = msg;
	}
}
