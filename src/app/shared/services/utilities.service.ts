import { Injectable } from '@angular/core';

@Injectable()
export class UtilitiesService {

    constructor() { }
    
    months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    
    getMonths(){
        return this.months;
    }

    monthName(monthIndex){
        return this.months[monthIndex - 1];
    }
    
    currentDateOfMonth(){
        return new Date().getDate();
    }

    currentMonth(){
        return new Date().getMonth() + 1;
    }

    getDuration(member){
        let currentDate = new Date();
        let yearDuration = currentDate.getFullYear() - member.dateOfJoining.year;
        let monthDuration = 0;
		if(this.currentMonth() == member.dateOfJoining.month){
			monthDuration = 0;
		} else if(this.currentMonth() > member.dateOfJoining.month){
			 monthDuration = this.currentMonth() - member.dateOfJoining.month;
		} else{
			monthDuration = this.currentMonth() + (12 - member.dateOfJoining.month);
			yearDuration--;
		}
        return {'years': yearDuration, 'months': monthDuration};
    }

    getMembersWithUpcomingBirthday(members){
        let membersWithUpcomingBirthday = [];
        members.forEach((member) => {
            if((member.birthday.day > this.currentDateOfMonth()) && (member.birthday.month == this.currentMonth())){
                membersWithUpcomingBirthday.push(member);
            }
        });
        return membersWithUpcomingBirthday;
    }

    getMembersWithUpcomingWorkAnniversary(members){
        let membersWithUpcomingWorkAnniversary = [];
        members.forEach((member) => {
            if((member.dateOfJoining.day > this.currentDateOfMonth()) && (member.dateOfJoining.month == this.currentMonth())){
                membersWithUpcomingWorkAnniversary.push(member);
            }
        });
        return membersWithUpcomingWorkAnniversary;
    }

	getMembersWithBirthdayToday(members){
        let membersWithBirthdayToday = [];
        members.forEach((member) => {
            if((member.birthday.day == this.currentDateOfMonth()) && (member.birthday.month == this.currentMonth())){
                membersWithBirthdayToday.push(member);
            }
        });
        return membersWithBirthdayToday;
    }

	getMembersWithWorkAnniversaryToday(members){
        let membersWithWorkAnniversaryToday = [];
        members.forEach((member) => {
            if((member.dateOfJoining.day == this.currentDateOfMonth()) && (member.dateOfJoining.month == this.currentMonth())){
                membersWithWorkAnniversaryToday.push(member);
            }
        });
        return membersWithWorkAnniversaryToday;
    }
}
