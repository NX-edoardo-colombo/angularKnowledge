import { Component } from '@angular/core';
import { DrinkTableService } from '../Services/drink-table.service';
import { DrinksTableDto } from '../Services/DTOs/drink-table.dto';
@Component({
  selector: 'kno-drink-page-table',
  templateUrl: './drink-page-table.component.html',
  styleUrls: ['./drink-page-table.component.scss']
})
export class DrinkPageTableComponent {
  
  arrayDrinks: DrinksTableDto[] = [];

  constructor(private readonly drinkTableService : DrinkTableService) {
    /* Without button */
    /* this.drinkTableService.getCocktailList().subscribe(dto => this.arrayDrinks = dto.drinks) */
  }

  onDrinkTableButtonClick(){
    this.drinkTableService.getCocktailList().subscribe(dto => this.arrayDrinks = dto.drinks)
  }
  
}
