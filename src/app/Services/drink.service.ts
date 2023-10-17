import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, delay, of } from 'rxjs';
import { DrinkLookupDto, DrinksLookupDto } from './DTOs/drink-table.dto';
import { DrinkCardDto } from './DTOs/drink-card.dto';

@Injectable({
  providedIn: 'root'
})
export class DrinkService {
  


  constructor(private readonly http: HttpClient) { }

  getCocktailList$(): Observable<DrinksLookupDto> {
    //return of({drinks:[]}) 
    return this.http.get<DrinksLookupDto>('https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=Alcoholic').pipe(delay(500));
  }

  getCocktailCard$(strDrink: string): Observable<DrinkCardDto> {
    return this.http.get<DrinkCardDto>('https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${strDrink}') 
    console.log('Service', strDrink);
  }

  

}
