import { Pipe, PipeTransform } from '@angular/core';
import { UtilitiesService } from '../utilities.service';

@Pipe({
  name: 'filterBirthdayBy'
})
export class FilterBirthdayByPipe implements PipeTransform {

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
                        if(member.birthday.month == selectedMonth){
                            filteredValues.push(member);
                        }
                    });
                    return filteredValues;
                }
              }
          }
          else{
              return null;
          }
      }
      else{
        return null;
      }
    }

}
