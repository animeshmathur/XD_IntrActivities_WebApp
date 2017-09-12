import { Pipe, PipeTransform } from '@angular/core';
import { UtilitiesService } from '../utilities.service';

@Pipe({
  name: 'filterWorkAnniversaryBy'
})
export class FilterWorkAnniversaryByPipe implements PipeTransform {

    constructor(private utilitiesService: UtilitiesService){ }
    
    transform(values: any, filterType?: any, filterTypeArg?: any): any {
      if(filterType){
          if(filterType == "month" && filterTypeArg){
              let selectedMonth = filterTypeArg;
              if(values){
                if(filterTypeArg == "All"){
                    return values;
                }
                else{
                    let filteredValues = [];
                    values.forEach((member) => {
                        if(member.dateOfJoining.month == selectedMonth){
                            filteredValues.push(member);
                        }
                    });
                    
                    return filteredValues;
                }
              }
          }
          else{
              return values;
          }
      }
      else{
        return values;
      }
    }

}
