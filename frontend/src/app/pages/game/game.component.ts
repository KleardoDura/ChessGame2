import { Component, AfterViewInit, OnInit } from '@angular/core';
import { interval, Subscription } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css'],
})
export class GameComponent implements OnInit, AfterViewInit {
  opponentName: string | null = '';
  userName: string | null = '';

  constructor(private router: Router) {}

  timer: number = 300; // Initial timer value in seconds (5 minutes)
  private timerSubscription: Subscription | undefined;

  formatTimer(): string {
    const minutes: string = Math.floor(this.timer / 60)
      .toString()
      .padStart(2, '0');
    const seconds: string = (this.timer % 60).toString().padStart(2, '0');
    return `${minutes}:${seconds}`;
  }

  ngOnInit(): void {
    const opponentData = localStorage.getItem('opponent');
    if (opponentData) {
      const parsedData = JSON.parse(opponentData);
      if (parsedData && parsedData.vorname) {
        this.opponentName = parsedData.vorname;
      }
    }

    const userData = localStorage.getItem('user');
    if (userData) {
      const parsedData = JSON.parse(userData);
      if (parsedData && parsedData.vorname) {
        this.userName = parsedData.vorname;
      }
    }

    this.timerSubscription = interval(1000).subscribe(() => {
      this.timer--;

      // Check if the timer reaches 0, you can handle this according to your chess game logic
      if (this.timer <= 0) {
        this.timer = 0;
        // Handle timer reaching 0, for example, end the game or show a message
      }
    });
  }
  ngAfterViewInit(): void {
    this.insertImage();
    this.coloring();
  }
  endGame(event: Event): void {
    this.router.navigateByUrl('/settings');
  }

  insertImage(): void {
    document.querySelectorAll('.box').forEach((element) => {
      const textContent = element.textContent?.trim();

      if (textContent && textContent.length !== 0) {
        const imgClass =
          textContent === 'Wpawn' || textContent === 'Bpawn'
            ? 'allimg allpawn'
            : 'allimg';
        element.innerHTML = `${textContent} <img class='${imgClass}' style='width:45px;' src="../../../assets/images/chess_pieces/${textContent}.png" alt="">`;

        const htmlElement = element as HTMLElement;
        htmlElement.style.cursor = 'pointer';
      }
    });
  }

  coloring(): void {
    const colors = document.querySelectorAll('.box');

    colors.forEach((color: Element, index) => {
      const htmlColor = color as HTMLElement;

      // Calculate row and column indices
      const row = Math.floor(index / 8);
      const col = index % 8;

      // Check if the sum of row and column indices is even to determine color
      const isEven = (row + col) % 2 === 0;

      // Set background color based on the result
      htmlColor.style.backgroundColor = isEven
        ? 'rgb(100, 75, 43)'
        : 'rgb(240, 201, 150)';
    });
  }
}
