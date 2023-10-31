import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { DrinksCardDto } from './DTOs/drink-card.dto';
import { DrinksLookupDto } from './DTOs/drink-table.dto';

@Injectable({
  providedIn: 'root'
})
export class DrinkProxyService {

  constructor(private readonly http: HttpClient) { }

  getFirstCocktailList$(): Observable<DrinksLookupDto> {
    return this.http.get<DrinksLookupDto>('https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=Alcoholic')
  }

  getCocktailList$(): Observable<DrinksLookupDto> {
    return this.http.get<DrinksLookupDto>('https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=Alcoholic')
  }

  getCocktail$(id: string): Observable<DrinksCardDto> {
    return this.http.get<DrinksCardDto>('https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=' + id)
  }
}
