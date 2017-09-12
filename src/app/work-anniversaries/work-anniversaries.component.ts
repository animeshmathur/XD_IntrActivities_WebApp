import { Component, OnInit } from '@angular/core';
import { MembersService } from '../members.service';
import { Member } from '../models/member.model';

@Component({
  selector: 'xd-work-anniversaries',
  templateUrl: './work-anniversaries.component.html',
  styleUrls: ['./work-anniversaries.component.css']
})
export class WorkAnniversariesComponent implements OnInit {

    members : Member[];
    
    constructor(private membersService: MembersService) { }
    
    ngOnInit() {
        this.members = this.membersService.members;
    }

}
