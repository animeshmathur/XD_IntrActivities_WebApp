import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule }   from '@angular/forms';
import { WorkAnniversaryListComponent } from './work-anniversary-list/work-anniversary-list.component';
import { FilterWorkAnniversaryByPipe } from './filter-work-anniversary-by.pipe';
import { SortByDatePipe } from './pipes/sort-by-date.pipe';

@NgModule({
    imports: [
        CommonModule, FormsModule
    ],
    declarations: [WorkAnniversaryListComponent, FilterWorkAnniversaryByPipe, SortByDatePipe],
    exports: [WorkAnniversaryListComponent]
    
})
export class WorkAnniversaryModule { }
