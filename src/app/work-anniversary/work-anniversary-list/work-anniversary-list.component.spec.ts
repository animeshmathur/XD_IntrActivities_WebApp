import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkAnniversaryListComponent } from './work-anniversary-list.component';

describe('WorkAnniversaryListComponent', () => {
  let component: WorkAnniversaryListComponent;
  let fixture: ComponentFixture<WorkAnniversaryListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WorkAnniversaryListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WorkAnniversaryListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
