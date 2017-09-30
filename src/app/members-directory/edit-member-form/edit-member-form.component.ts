import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { UtilitiesService } from '../../shared/services/utilities.service';
import { Member } from '../../shared/models/member.model'; 
import { MembersService } from '../../shared/services/members.service';
import { CustomValidatorService } from '../../shared/services/custom-validator.service';

@Component({
  selector: '[xd-edit-member-form]',
  templateUrl: './edit-member-form.component.html',
  styleUrls: ['./edit-member-form.component.css']
})
export class EditMemberFormComponent implements OnInit {

	@Input("member") member;
	@Input() index: number;
	 
	@Output() closeEdit: EventEmitter<void> = new EventEmitter<void>();
	@Output() updateMember: EventEmitter<Member> = new EventEmitter<Member>();
	 
	months = [];
	 
	constructor(private utilitiesService: UtilitiesService,
				private builder: FormBuilder,
			    private customValidator: CustomValidatorService) {
		this.months = this.utilitiesService.getMonths();
	}
	
	fName = new FormControl('', [Validators.required]);
	lName = new FormControl('');
	psaId = new FormControl('', [Validators.required]);
	location = new FormControl('', [Validators.required]);
	birthday = {
		day: new FormControl('', [Validators.required, this.customValidator.isCalendarDay]),
		month: new FormControl('', [Validators.required, this.customValidator.isCalendarMonth])
	};
	email = new FormControl('', [Validators.required]);
	dateOfJoining = {
		day: new FormControl('', [Validators.required, this.customValidator.isCalendarDay]),
		month: new FormControl('', [Validators.required, this.customValidator.isCalendarMonth]),
		year: new FormControl('', [Validators.required, this.customValidator.isCalendarYear])
	};
	
	editMemberForm: FormGroup = this.builder.group({
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

	ngOnInit() {
		this.editMemberForm.patchValue(this.member);
	}
	 
	closeEditing(){
		this.closeEdit.emit();
	}

	updateMemberDetail(){
		console.log(this.editMemberForm.value);
		this.member = this.editMemberForm.value;
		this.updateMember.emit(this.member);
		this.closeEditing();
	}
}
