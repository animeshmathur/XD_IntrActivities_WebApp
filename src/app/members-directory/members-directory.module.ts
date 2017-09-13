import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MembersDirectoryRoutingModule } from './members-directory-routing.module';
import { MembersListComponent } from './members-list/members-list.component';

@NgModule({
	imports: [
		CommonModule,
		MembersDirectoryRoutingModule
	],
	declarations: [MembersListComponent],
	exports: [MembersListComponent]
})
export class MembersDirectoryModule { }
