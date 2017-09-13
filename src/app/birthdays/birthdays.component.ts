import { Component, OnInit } from '@angular/core';
import { MembersService } from '../shared/services/members.service';
import { Member } from '../shared/models/member.model';

@Component({
  selector: 'xd-birthdays',
  templateUrl: './birthdays.component.html',
  styleUrls: ['./birthdays.component.css']
})
export class BirthdaysComponent implements OnInit {
    
    members : Member[];
    
    constructor(private membersService: MembersService) { }
    
    ngOnInit() {
        this.membersService.loadMembers().subscribe(() => {
			this.members = this.membersService.members;
		});
    }

}
