import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, delay, filter, map, of } from 'rxjs';
import { DrinkLookupDto, DrinksLookupDto } from './DTOs/drink-table.dto';
import { DrinksCardDto } from './DTOs/drink-card.dto';
import { DrinkImportDtoToDrink } from '../Mapping/drink-dto.mapping';
import { Drink } from '../Models/drink.model';

@Injectable({
  providedIn: 'root'
})
export class DrinkService {
  
  constructor(private readonly http: HttpClient) { }

  getCocktailList$(): Observable<DrinksLookupDto> {
    //return of({drinks:[]}) 
    return this.http.get<DrinksLookupDto>('https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=Alcoholic');
  }

  getCocktail$(name: string): Observable<Drink> {
    return this.http.get<DrinksCardDto>('https://www.thecocktaildb.com/api/json/v1/1/search.php?s=' + name).pipe(
      map(dto => dto.drinks.map(drink => DrinkImportDtoToDrink(drink))[0] )
    )
  }
  

}