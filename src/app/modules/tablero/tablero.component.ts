import { Component } from '@angular/core';
import { ChessBoard } from '../../tablero';
import { Color, FENChar } from '../../models';

@Component({
  selector: 'app-tablero',
  standalone: true,
  imports: [],
  templateUrl: './tablero.component.html',
  styleUrl: './tablero.component.css'
})
export class TableroComponent {
  private chessBoard = new ChessBoard();
  public chessBoardView: (FENChar | null)[][] = this.chessBoard.chessBoardView;
  public get playerColor(): Color {return this.chessBoard.playerColor; };

}
