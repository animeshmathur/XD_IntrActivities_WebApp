import { Component, OnInit } from '@angular/core';
import { MembersService } from '../shared/services/members.service';
import { Member } from '../shared/models/member.model';

@Component({
  selector: 'xd-work-anniversaries',
  templateUrl: './work-anniversaries.component.html',
  styleUrls: ['./work-anniversaries.component.css']
})
export class WorkAnniversariesComponent implements OnInit {

    members : Member[];
    
    constructor(private membersService: MembersService) { }
    
    ngOnInit() {
        this.membersService.loadMembers().subscribe(() => {
			this.members = this.membersService.members;
		});
    }

}
