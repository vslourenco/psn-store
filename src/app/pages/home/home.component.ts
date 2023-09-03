import { Component } from '@angular/core';
import { dataFake } from '../../data/dataFake';
import { Game } from '../../model/game';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  games: Game[] = dataFake;
}
