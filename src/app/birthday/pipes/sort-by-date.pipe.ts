import { Pipe, PipeTransform } from '@angular/core';
import { UtilitiesService } from '../../utilities.service';

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
            let countBornInSameMonth = 0;
            let months = this.utilitiesService.getMonths();
            months.forEach((month, index) => {
                countBornInSameMonth = 0;
                let bornInSameMonth = [[], []];
                bornInSameMonth[index] = [];
                members.forEach((member) => {
                    if (member.birthday.month == (index + 1)){
                        bornInSameMonth[index][countBornInSameMonth] = member;
                        countBornInSameMonth ++;
                    }
                });
                sortedBySameMonth.push(bornInSameMonth[index]);
            });
            
            // Second, Sort by Day
            let sorted = [];
            sortedBySameMonth.forEach((bornInSameMonth, index) => {
                if(bornInSameMonth.length > 0){
					bornInSameMonth.sort((a, b) => {
						if(parseInt(a.birthday.day) > parseInt(b.birthday.day)){
							return 1;
						} else if(parseInt(a.birthday.day) < parseInt(b.birthday.day)){
							return -1;
						}
						return 0;
					});
					bornInSameMonth.forEach((member) => {
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
