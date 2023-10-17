import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { DrinksLookupDto } from './DTOs/drink-table.dto';

@Injectable({
  providedIn: 'root'
})
export class DrinkService {

  constructor(private readonly http: HttpClient) { }

  getCocktailList$(): Observable<DrinksLookupDto> {
    return this.http.get<DrinksLookupDto>('https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=Alcoholic');
  }

}
