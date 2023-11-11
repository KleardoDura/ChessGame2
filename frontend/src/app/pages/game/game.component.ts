import { Component, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css'],
})
export class GameComponent implements AfterViewInit {
  ngAfterViewInit(): void {
    this.insertImage();
    this.coloring();
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
