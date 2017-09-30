import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DataService } from './services/data.service';
import { UtilitiesService } from './services/utilities.service';
import { MembersService } from './services/members.service';
import { CustomValidatorService } from './services/custom-validator.service';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [],
  providers: [DataService, UtilitiesService, MembersService, CustomValidatorService],
  exports: []
})
export class SharedModule { }
