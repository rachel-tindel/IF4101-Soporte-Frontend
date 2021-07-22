import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NavBarSupportComponent } from './nav-bar-support.component';

describe('NavBarSupportComponent', () => {
  let component: NavBarSupportComponent;
  let fixture: ComponentFixture<NavBarSupportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NavBarSupportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavBarSupportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
