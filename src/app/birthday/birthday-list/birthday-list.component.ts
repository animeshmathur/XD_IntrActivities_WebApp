import { Component, OnInit, Input } from '@angular/core';
import { UtilitiesService } from '../../utilities.service';
import { Member } from '../../models/member.model';

@Component({
  selector: 'xd-birthday-list',
  templateUrl: './birthday-list.component.html',
  styleUrls: ['./birthday-list.component.css']
})
export class BirthdayListComponent implements OnInit {
    
    @Input("members") members : Member[];
    @Input("isFilteredList") isFilteredList: boolean;
    months = [];
    filterByMonth = "All";
    sortDescending: boolean = false;
    
    constructor(private utilitiesService:UtilitiesService) {
        this.months = this.utilitiesService.getMonths();
    }
    
    ngOnInit() {
        
    }
}
