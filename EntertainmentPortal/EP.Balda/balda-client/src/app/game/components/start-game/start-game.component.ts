import { CurrentGame } from './../../models/currentGame';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Size } from '../../models/size';
import { GameService } from '../../services/game.service';
import { HttpResponseBase, HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-start-game',
  templateUrl: './start-game.component.html',
  styleUrls: ['./start-game.component.sass']
})
export class StartGameComponent implements OnInit {

  mapSize: number;

  constructor(private router: Router, private gameService: GameService, private route: ActivatedRoute) {
    this.mapSize = 5;
  }

  game: CurrentGame;

  sizes = [
     new Size(3, '3x3' ),
     new Size(5, '5x5' ),
     new Size(7, '7x7' ),
  ];

  ngOnInit() { }

  onStartClick() {
      this.gameService.createNewGame(this.mapSize)
        .subscribe(b => {
          console.log(b),
          this.router.navigateByUrl('playground');
        },
        (err: HttpErrorResponse) => console.log(err.error));
      }
}
