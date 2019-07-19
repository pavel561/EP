import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GameFieldComponent } from './game/components/game-field/game-field.component';
import { GetPlayerComponent } from './game/components/get-player/get-player.component';
import { PlayerListComponent } from './game/components/player-list/player-list.component';
import { AddPlayerComponent } from './game/components/add-player/add-player.component';

const routes: Routes = [
  {path: 'players', component: PlayerListComponent},
  {path: 'edit', component: AddPlayerComponent},
  {path: 'get', component: GetPlayerComponent},
  {path: 'game', component: GameFieldComponent},
  {path: '', redirectTo: 'players', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {enableTracing: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }