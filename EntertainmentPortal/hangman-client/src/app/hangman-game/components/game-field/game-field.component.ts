import { Router } from '@angular/router';
import { GameData } from './../../models/game-data';
import { GameService } from './../../services/game.service';
import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { HttpResponseBase } from '@angular/common/http';

@Component({
  selector: 'app-game-field',
  templateUrl: './game-field.component.html',
  styleUrls: ['./game-field.component.sass']
})
export class GameFieldComponent implements OnInit {
  gameFieldData: GameData = null;
  tmpGameData: GameData = null;
  endGameStatus: string = null;

  constructor(private gameService: GameService, private router: Router) { }

  ngOnInit() {
    this.startNewGame();
  }

  checkLetter(letter: string) {
    this.tmpGameData = new GameData();

    this.tmpGameData.id = this.gameFieldData.id;
    this.tmpGameData.letter = letter;
    this.tmpGameData.alphabet = null;
    this.tmpGameData.correctLetters = null;
    this.tmpGameData.userErrors = 0;

    this.gameService.updateGame(this.tmpGameData).subscribe(b => {
      this.gameFieldData = b;
      if (this.gameFieldData.userErrors === 6) {
        this.deleteSession(b.id);
        this.router.navigateByUrl('/loose');
      }

      if (!this.gameFieldData.correctLetters.includes('_')) {
        this.deleteSession(b.id);
        this.router.navigateByUrl('/win');
      }
    },
        (err: HttpResponseBase) => console.log(err.statusText)
    );
  }

  startNewGame() {
    this.gameService.createGame().subscribe(b => {
      this.gameFieldData = b;
    },
      (err: HttpResponseBase) => console.log(err.statusText));
  }

  deleteSession(id: number) {
    this.gameService.deleteGame(id).subscribe(
      (err: HttpResponseBase) => console.log(err.statusText)
    );
  }
}