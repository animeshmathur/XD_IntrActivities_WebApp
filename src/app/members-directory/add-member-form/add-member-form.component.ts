import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { UtilitiesService } from '../../shared/services/utilities.service';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { MembersService } from '../../shared/services/members.service';
import { CustomValidatorService } from '../../shared/services/custom-validator.service';

@Component({
  selector: 'xd-add-member-form',
  templateUrl: './add-member-form.component.html',
  styleUrls: ['./add-member-form.component.css']
})
export class AddMemberFormComponent implements OnInit {

  	months = [];
	
	@Output() addMemberFeedback: EventEmitter<string> = new EventEmitter<string>();
	
	fName = new FormControl('', [Validators.required]);
	lName = new FormControl('');
	psaId = new FormControl('', [Validators.required]);
	location = new FormControl('', [Validators.required]);
	birthday = {
		day: new FormControl('', [Validators.required, this.customValidator.isCalendarDay]),
		month: new FormControl('Month', [Validators.required, this.customValidator.isCalendarMonth])
	};
	email = new FormControl('', [Validators.required]);
	dateOfJoining = {
		day: new FormControl('', [Validators.required, this.customValidator.isCalendarDay]),
		month: new FormControl('Month', [Validators.required, this.customValidator.isCalendarMonth]),
		year: new FormControl('', [Validators.required, this.customValidator.isCalendarYear])
	};
	
	addMemberForm: FormGroup = this.builder.group({
		fName: this.fName,
		lName: this.lName,
		psaId: this.psaId,
		location: this.location,
		birthday : new FormGroup({
			day: this.birthday.day,
			month: this.birthday.month
		}),
		dateOfJoining : new FormGroup({
			day: this.dateOfJoining.day,
			month: this.dateOfJoining.month,
			year: this.dateOfJoining.year
		}),
		email: this.email
	});
    
    constructor(private membersService: MembersService,
				private utilitiesService: UtilitiesService,
				private builder: FormBuilder,
				private customValidator: CustomValidatorService) {
		this.months = this.utilitiesService.getMonths();
	}
    
    ngOnInit() {
        
    }
	
	addMember(){
//		console.log(this.addMemberForm.value);
		this.membersService.addMember(this.addMemberForm.value).subscribe(
			(data) => {
				if(data.status == "success"){
					this.addMemberForm.reset();	
				}				
				this.addMemberFeedback.emit(data.message);
			},
			(err) => {
				this.addMemberFeedback.emit(err);
			}
		);
	}

}
