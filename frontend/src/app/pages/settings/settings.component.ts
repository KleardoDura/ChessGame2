import { Component, AfterViewInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css'],
})
export class SettingsComponent implements AfterViewInit {
  //An hardoced friend as far as we dont have our backend ready to get friend details
  friend = {
    vorname: 'henry',
    nachname: 'henry',
    email: ' henry@example.com',
    geburtsdatum: ' 02-02-1989',
    elo: 500,
  };

  user = {
    vorname: 'John',
    nachname: 'John',
    email: ' chessplayer42@example.com@example.com',
    geburtsdatum: ' 02-02-1989',
    elo: 500,
  };

  constructor(private router: Router) {}
  updateUserDetails(event: Event): void {
    event.preventDefault();
  }

  startGame(event: Event): void {
    if (localStorage.getItem('game') !== null) {
      alert('Sorry but you are already in another game!');

      this.router.navigateByUrl('/game');
      return;
    }

    const opponentInput = document.getElementById(
      'opponent'
    ) as HTMLInputElement;
    const opponentName = opponentInput.value;
    if (opponentName == '') {
      this.router.navigateByUrl('/settings');
      return;
    }

    this.friend.vorname = opponentName;
    localStorage.setItem('opponent', JSON.stringify(this.friend));
    localStorage.setItem('user', JSON.stringify(this.user));
    event.preventDefault();

    localStorage.setItem('game', '1');
    this.router.navigateByUrl('/game');
  }

  ngAfterViewInit(): void {}
}
