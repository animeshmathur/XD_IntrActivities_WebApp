import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';

import { AppRoutingModule } from './app-routing/app-routing.module';

import { BirthdayModule } from './birthday/birthday.module';
import { WorkAnniversaryModule } from './work-anniversary/work-anniversary.module';

import { DataService } from './data.service';
import { UtilitiesService } from './utilities.service';
import { MembersService } from './members.service';

import { NavigationComponent } from './navigation/navigation.component';
import { HomeComponent } from './home/home.component';
import { BirthdaysComponent } from './birthdays/birthdays.component';

import { WorkAnniversariesComponent } from './work-anniversaries/work-anniversaries.component';

@NgModule({
  declarations: [
      AppComponent,
      NavigationComponent,
      HomeComponent,
      BirthdaysComponent,
      WorkAnniversariesComponent
  ],
  imports: [
      BrowserModule,
      HttpModule,
      AppRoutingModule,
      BirthdayModule,
      WorkAnniversaryModule
  ],
  providers: [DataService, UtilitiesService, MembersService],
  bootstrap: [AppComponent]
})
export class AppModule { }
