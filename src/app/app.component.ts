import { Component } from '@angular/core';
import { DrinkService } from './Services/drink.service';

@Component({
  selector: 'kno-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  name: string = 'gian franco'

  constructor(private readonly drinkService: DrinkService) {

  }




}
