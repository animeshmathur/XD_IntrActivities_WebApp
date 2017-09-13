import { Pipe, PipeTransform } from '@angular/core';
import { UtilitiesService } from '../../shared/services/utilities.service';

@Pipe({
  name: 'sortByDate'
})
export class SortByDatePipe implements PipeTransform {

    constructor(private utilitiesService: UtilitiesService){
        
    }
    
    transform(members: any, args?: any): any {
        if(members){
            
            // Sort in Ascending order
            
            // First, Sort by Month
            let sortedBySameMonth = [];
            let countJoinedInSameMonth = 0;
            let months = this.utilitiesService.getMonths();
            months.forEach((month, index) => {
                countJoinedInSameMonth = 0;
                let joinedInSameMonth = [[], []];
                joinedInSameMonth[index] = [];
                members.forEach((member) => {
                    if (member.dateOfJoining.month == (index + 1)){
                        joinedInSameMonth[index][countJoinedInSameMonth] = member;
                        countJoinedInSameMonth ++;
                    }
                });
                sortedBySameMonth.push(joinedInSameMonth[index]);
            });
            
            // Second, Sort by Day
            let sorted = [];
            sortedBySameMonth.forEach((joinedInSameMonth, index) => {
                if(joinedInSameMonth.length > 0){
					joinedInSameMonth.sort((a, b) => {
						if(parseInt(a.dateOfJoining.day) > parseInt(b.dateOfJoining.day)){
							return 1;
						} else if(parseInt(a.dateOfJoining.day) < parseInt(b.dateOfJoining.day)){
							return -1;
						}
						return 0;
					});
					joinedInSameMonth.forEach((member) => {
						sorted.push(member);
					});
                }
            });
            
            // If args, sort in Descending order
            if(args){
                sorted.reverse();
            }
            return sorted;
        }
        else{
            return members;
        }
    }

}
