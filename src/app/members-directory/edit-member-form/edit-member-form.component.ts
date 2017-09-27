import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { UtilitiesService } from '../../shared/services/utilities.service';
import { Member } from '../../shared/models/member.model'; 
import { MembersService } from '../../shared/services/members.service';

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
	 
	constructor(private utilitiesService: UtilitiesService, private builder: FormBuilder) {
		this.months = this.utilitiesService.getMonths();
	}
	
	fName: FormControl = new FormControl("");
	lName: FormControl = new FormControl("");
	psaId = new FormControl('');
	location = new FormControl('');
	birthday = {
		day: new FormControl(''),
		month: new FormControl('')
	};
	email = new FormControl('');
	dateOfJoining = {
		day: new FormControl(''),
		month: new FormControl(''),
		year: new FormControl('')
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
