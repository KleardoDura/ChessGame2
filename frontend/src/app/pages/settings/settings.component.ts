import { Component } from '@angular/core';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css'],
})
export class SettingsComponent {
  updateUserDetails(event: Event): void {
    event.preventDefault();
  }

  startGame(event: Event): void {
    event.preventDefault();
  }
}
