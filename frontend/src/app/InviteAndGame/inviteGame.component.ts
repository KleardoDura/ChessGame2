import {Component} from '@angular/core';

@Component({
  selector: 'app-InviteAndGame',
  templateUrl: './inviteGame.component.html',
  styleUrls: ['./inviteGame.component.css'],
})
export class InviteGameComponent {
  updateUserDetails(event: Event): void {
    event.preventDefault();
  }

  startGame(event: Event): void {
    event.preventDefault();
  }
}
