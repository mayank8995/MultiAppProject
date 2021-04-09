import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClapComponentComponent } from './clap-component.component';

describe('ClapComponentComponent', () => {
  let component: ClapComponentComponent;
  let fixture: ComponentFixture<ClapComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClapComponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ClapComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
