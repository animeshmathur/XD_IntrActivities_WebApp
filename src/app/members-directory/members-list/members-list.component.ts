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
	feedback = {
		status: "",
		message: ""
	}
    
    constructor(private membersService: MembersService) {
		
	}
    
    ngOnInit() {
        this.getMembers();
    }
	
	getMembers(){
		this.membersService.loadMembers().subscribe(() => {
			this.members = this.membersService.members;
			this.members.forEach(() => this.isEditing.push(false));
		});
	}
	
	closeEditing(i: number){
		this.isEditing[i] = false;
	}
	
	updateMemberData(index: number, member: Member){
		this.membersService.updateMember(index, member).subscribe(
			(data) => {
				this.serveFeedback(data);
			},
			(err) => {
				this.serveFeedback(err);
			}
		);
	}
	
	deleteMember(member: Member){
		if(confirm(`Do you want to delete member record of ${member.fName}?`)){
			this.membersService.deleteMember(member).subscribe(
				(data) => {
					this.serveFeedback(data);
				},
				(err) => {
					this.serveFeedback(err);
				}
			);
		}
	}
	
	serveFeedback(feedback){
		if(feedback.status == "success"){
			this.getMembers();
		}
		this.hasFeedback = true;
		this.feedback.status = feedback.status;
		this.feedback.message = feedback.message;
	}
}
