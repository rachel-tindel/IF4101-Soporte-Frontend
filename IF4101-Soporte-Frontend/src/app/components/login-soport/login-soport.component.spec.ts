import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginSoportComponent } from './login-soport.component';

describe('LoginSoportComponent', () => {
  let component: LoginSoportComponent;
  let fixture: ComponentFixture<LoginSoportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoginSoportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginSoportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
