import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule }   from '@angular/forms';
import { BirthdayListComponent } from './birthday-list/birthday-list.component';
import { FilterBirthdayByPipe } from './filter-birthday-by.pipe';
import { SortByDatePipe } from './pipes/sort-by-date.pipe';

@NgModule({
    imports: [
        CommonModule, FormsModule
    ],
    declarations: [BirthdayListComponent, FilterBirthdayByPipe, SortByDatePipe],
    exports: [BirthdayListComponent]
})
export class BirthdayModule {
//    static forRoot() {
//        return {
//          ngModule: BirthdayModule,
//          providers: [  ]
//        }
//    }
}

