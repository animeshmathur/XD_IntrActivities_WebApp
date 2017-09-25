import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { MembersDirectoryRoutingModule } from './members-directory-routing.module';
import { MembersListComponent } from './members-list/members-list.component';
import { AddMemberFormComponent } from './add-member-form/add-member-form.component';
import { EditMemberFormComponent } from './edit-member-form/edit-member-form.component';

@NgModule({
	imports: [
		CommonModule,
		ReactiveFormsModule,
		MembersDirectoryRoutingModule
	],
	declarations: [MembersListComponent, AddMemberFormComponent, EditMemberFormComponent],
	exports: [MembersListComponent]
})
export class MembersDirectoryModule { }
