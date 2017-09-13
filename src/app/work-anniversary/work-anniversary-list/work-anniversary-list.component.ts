import { Component, OnInit, Input } from '@angular/core';
import { UtilitiesService } from '../../shared/services/utilities.service';
import { Member } from '../../shared/models/member.model';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'xd-work-anniversary-list',
  templateUrl: './work-anniversary-list.component.html',
  styleUrls: ['./work-anniversary-list.component.css']
})
export class WorkAnniversaryListComponent implements OnInit {

    @Input("members") members: Member[];
    @Input("isFilteredList") isFilteredList: boolean;
    months = [];
    filterByMonth = "All";
    sortDescending: boolean = false;
    
    constructor(private utilitiesService: UtilitiesService) {
        this.months = this.utilitiesService.getMonths();
    }

    ngOnInit() {
        
    }

}
