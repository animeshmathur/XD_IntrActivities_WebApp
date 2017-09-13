import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';

import { AppRoutingModule } from './app-routing/app-routing.module';

import { SharedModule } from './shared/shared.module';
import { BirthdayModule } from './birthday/birthday.module';
import { WorkAnniversaryModule } from './work-anniversary/work-anniversary.module';
import { MembersDirectoryModule } from './members-directory/members-directory.module';

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
	  SharedModule,
      BirthdayModule,
      WorkAnniversaryModule,
	  MembersDirectoryModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
