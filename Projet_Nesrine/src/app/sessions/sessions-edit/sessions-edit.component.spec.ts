import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SessionsEditComponent } from './sessions-edit.component';

describe('SessionsEditComponent', () => {
  let component: SessionsEditComponent;
  let fixture: ComponentFixture<SessionsEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SessionsEditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SessionsEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
