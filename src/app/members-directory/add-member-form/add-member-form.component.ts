import { Component, OnInit } from '@angular/core';
import { UtilitiesService } from '../../shared/services/utilities.service';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'xd-add-member-form',
  templateUrl: './add-member-form.component.html',
  styleUrls: ['./add-member-form.component.css']
})
export class AddMemberFormComponent implements OnInit {

  	months = [];
	
	fName = new FormControl('');
	lName = new FormControl('');
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
    
    constructor(private utilitiesService: UtilitiesService, private builder: FormBuilder) {
		this.months = this.utilitiesService.getMonths();
	}
    
    ngOnInit() {
        
    }
	
	addMember(){
		console.log(this.addMemberForm.value);
	}

}
