import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SessionsAddComponent } from './sessions-add.component';

describe('SessionsAddComponent', () => {
  let component: SessionsAddComponent;
  let fixture: ComponentFixture<SessionsAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SessionsAddComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SessionsAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
