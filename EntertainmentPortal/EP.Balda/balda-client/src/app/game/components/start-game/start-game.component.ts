import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Size } from '../../models/size';

@Component({
  selector: 'app-start-game',
  templateUrl: './start-game.component.html',
  styleUrls: ['./start-game.component.sass']
})
export class StartGameComponent implements OnInit {

  constructor(private router: Router) { }
  sizes = [
     new Size(3, '3x3' ),
     new Size(5, '5x5' ),
     new Size(7, '7x7' ),
  ];

  ngOnInit() {
  }

  onStartClick() {
    this.router.navigateByUrl('api/game');
  }

}