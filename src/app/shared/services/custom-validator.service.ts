import { Injectable } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Member } from '../models/member.model';
import { MembersService } from './members.service';

@Injectable()
export class CustomValidatorService {
	
	members: Member[];
	
	constructor(private membersService: MembersService) { 
		this.members = this.membersService.members;
	}
	
	isCalendarDay(input: FormControl){
		let value = input.value;
		let hasValidValue: boolean;
		if(!isNaN(value)){
			hasValidValue = value <= 31 && value >= 1;
		} else{
			hasValidValue = false;
		}
		return hasValidValue ? null : {isNotCalendarDay: true};
	}
	
	isCalendarMonth(input: FormControl){
		let value = input.value;
		let hasValidValue: boolean;
		if(!isNaN(value)){
			hasValidValue = value <= 12 && value >= 1;
		} else{
			hasValidValue = false;
		}
		return hasValidValue ? null : {isNotCalendarMonth: true};
	}
	
	isCalendarYear(input: FormControl){
		let value = input.value;
		return !isNaN(value) && value > 0 ? null : {isNotCalendarYear: true};
	}
	
}
