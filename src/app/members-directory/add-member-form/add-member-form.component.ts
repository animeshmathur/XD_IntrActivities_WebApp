import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { UtilitiesService } from '../../shared/services/utilities.service';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { MembersService } from '../../shared/services/members.service';

@Component({
  selector: 'xd-add-member-form',
  templateUrl: './add-member-form.component.html',
  styleUrls: ['./add-member-form.component.css']
})
export class AddMemberFormComponent implements OnInit {

  	months = [];
	
	@Output() addMemberFeedback: EventEmitter<string> = new EventEmitter<string>();
	
	fName = new FormControl('', Validators.required);
	lName = new FormControl('');
	psaId = new FormControl('', Validators.required);
	location = new FormControl('', Validators.required);
	birthday = {
		day: new FormControl('', Validators.required),
		month: new FormControl('', Validators.required)
	};
	email = new FormControl('', Validators.required);
	dateOfJoining = {
		day: new FormControl('', Validators.required),
		month: new FormControl('', Validators.required),
		year: new FormControl('', Validators.required)
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
    
    constructor(private membersService: MembersService, private utilitiesService: UtilitiesService, private builder: FormBuilder) {
		this.months = this.utilitiesService.getMonths();
	}
    
    ngOnInit() {
        
    }
	
	addMember(){
		console.log(this.addMemberForm.value);
		this.membersService.addMember(this.addMemberForm.value).subscribe(
			(data) => {
				this.addMemberFeedback.emit(data);
			},
			(err) => {
				this.addMemberFeedback.emit(err);
			}
		);
	}

}
