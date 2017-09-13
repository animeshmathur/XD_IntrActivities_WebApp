import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DataService } from './services/data.service';
import { UtilitiesService } from './services/utilities.service';
import { MembersService } from './services/members.service';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [],
  providers: [DataService, UtilitiesService, MembersService],
  exports: []
})
export class SharedModule { }
