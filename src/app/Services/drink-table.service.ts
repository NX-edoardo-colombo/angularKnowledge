import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { DrinksTableDto } from './DTOs/drink-table.dto';

@Injectable({
  providedIn: 'root'
})
export class DrinkTableService {

  constructor(private readonly http: HttpClient) { }
  getCocktailList(): Observable<DrinksTableDto> {
    return this.http.get<DrinksTableDto>('https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=Alcoholic');
  }
}
