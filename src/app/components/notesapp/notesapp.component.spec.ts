import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { NotesappComponent } from './notesapp.component';

describe('NotesappComponent', () => {
  let component: NotesappComponent;
  let fixture: ComponentFixture<NotesappComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ NotesappComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NotesappComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
