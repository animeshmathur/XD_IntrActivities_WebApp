import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';


import { HomeComponent } from '../home/home.component';
import { BirthdaysComponent } from '../birthdays/birthdays.component';
import { WorkAnniversariesComponent } from '../work-anniversaries/work-anniversaries.component';

const routes: Routes = [
    {
        path: 'home',
        component: HomeComponent
    },
    {
        path: 'birthdays',
        component: BirthdaysComponent
    },
    {
        path: 'workAnniversaries',
        component: WorkAnniversariesComponent
    },
    {
        path: '',
		pathMatch: 'full',
        redirectTo: 'home'
    }
];

@NgModule({
    imports: [
        RouterModule.forRoot(routes)
    ],
    exports: [
        RouterModule
    ],
    declarations: []
})
export class AppRoutingModule { }
