import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { DrinkProxyService } from 'src/app/Infrastructure/drink-proxy.service';
import { DrinkImportDtoToDrink } from 'src/app/Mapping/drink-dto.mapping';
import { Drink } from 'src/app/Models/drink.model';

@Injectable({
  providedIn: 'root'
})
export class DrinkInfoPageService {



  constructor(private readonly drinkProxyService: DrinkProxyService) { }

  getCocktailInfo$(id: string): Observable<Drink> {
    return this.drinkProxyService.getCocktail$(id).pipe(
      map(dto => dto.drinks.map(drink => DrinkImportDtoToDrink(drink))[0])
    )
  }
}
