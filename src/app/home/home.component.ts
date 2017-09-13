import { Component, OnInit } from '@angular/core';
import { UtilitiesService } from '../shared/services/utilities.service';
import { MembersService } from '../shared/services/members.service';
import { Member } from '../shared/models/member.model';

@Component({
  selector: 'xd-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

    members : Member[];
    membersWithUpcomingBirthday: Member[] = [];
    membersWithUpcomingWorkAnniversary: Member[] = [];
    membersWithBirthdayToday: Member[] = [];
    membersWithWorkAnniversaryToday: Member[] = [];
    
    constructor(private utilitiesService: UtilitiesService, private membersService: MembersService) {}
    
    ngOnInit() {
		this.membersService.loadMembers().subscribe(() => {
			this.members = this.membersService.members;
			this.membersWithUpcomingBirthday = this.membersService.membersWithUpcomingBirthday;
			this.membersWithUpcomingWorkAnniversary = this.membersService.membersWithUpcomingWorkAnniversary;
			this.membersWithBirthdayToday = this.membersService.membersWithBirthdayToday;
			this.membersWithWorkAnniversaryToday = this.membersService.membersWithWorkAnniversaryToday;
		});
    }

}
