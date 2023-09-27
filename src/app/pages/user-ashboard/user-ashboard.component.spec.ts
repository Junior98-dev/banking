import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserAshboardComponent } from './user-ashboard.component';

describe('UserAshboardComponent', () => {
  let component: UserAshboardComponent;
  let fixture: ComponentFixture<UserAshboardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UserAshboardComponent]
    });
    fixture = TestBed.createComponent(UserAshboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
