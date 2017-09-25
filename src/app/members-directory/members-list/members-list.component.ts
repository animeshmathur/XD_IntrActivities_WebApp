import { Component, OnInit } from '@angular/core';
import { UtilitiesService } from '../../shared/services/utilities.service';
import { MembersService } from '../../shared/services/members.service';
import { Member } from '../../shared/models/member.model';

@Component({
  selector: 'xd-members-list',
  templateUrl: './members-list.component.html',
  styleUrls: ['./members-list.component.css']
})
export class MembersListComponent implements OnInit {

  	members : Member[];
	months = [];
	lastDateOfCurrentMonth: number = 31;
    
    constructor(private utilitiesService: UtilitiesService, private membersService: MembersService) {
		this.months = this.utilitiesService.getMonths();
		this.lastDateOfCurrentMonth = this.utilitiesService.lastDateOfCurrentMonth();
	}
    
    ngOnInit() {
        this.membersService.loadMembers().subscribe(() => {
			this.members = this.membersService.members;
		});
    }

}
