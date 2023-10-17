import { Component } from '@angular/core';
import { DrinkTableService } from '../Services/drink-table.service';
import { DrinksTableDto } from '../Services/DTOs/drink-table.dto';

@Component({
  selector: 'kno-drink-page',
  templateUrl: './drink-page.component.html',
  styleUrls: ['./drink-page.component.scss']
})
export class DrinkPageComponent {

  drinkList: DrinksTableDto[] =[]

  constructor(private readonly drinkTableService : DrinkTableService) {
    /* Without button */
    /* this.drinkTableService.getCocktailList().subscribe(dto => this.arrayDrinks = dto.drinks) */
  }

  onDrinkTableButtonClick(){
    this.drinkTableService.getCocktailList().subscribe(dto => this.drinkList = dto.drinks)
  }
}
