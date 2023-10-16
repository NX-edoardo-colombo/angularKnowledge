import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { DrinksDto } from './DTOs/drink.dto';

@Injectable({
  providedIn: 'root'
})
export class DrinkService {

  constructor(private readonly http: HttpClient) { }

  getRandomCocktail$(): Observable<DrinksDto> {
    return this.http.get<DrinksDto>('https://www.thecocktaildb.com/api/json/v1/1/random.php');
  }


}
