import {ComponentFixture, TestBed} from '@angular/core/testing';

import {InviteGameComponent} from './inviteGame.component';

describe('SettingsComponent', () => {
  let component: InviteGameComponent;
  let fixture: ComponentFixture<InviteGameComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InviteGameComponent],
    });
    fixture = TestBed.createComponent(InviteGameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
