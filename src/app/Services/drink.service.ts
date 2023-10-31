import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, delay, filter, first, map, of, pipe, tap } from 'rxjs';
import { DrinkLookupDto, DrinksLookupDto } from './DTOs/drink-table.dto';
import { DrinksCardDto } from './DTOs/drink-card.dto';
import { DrinkImportDtoToDrink } from '../Mapping/drink-dto.mapping';
import { Drink } from '../Models/drink.model';
import { cloneDeep } from 'lodash'

@Injectable({
  providedIn: 'root'
})
export class DrinkService {

  private drinksCache: BehaviorSubject<DrinksLookupDto> | undefined
  private drinkInfoCache: Map<string, BehaviorSubject<DrinksCardDto>> = new Map();

  constructor(private readonly http: HttpClient) { }

  getFirstCocktailList$(): Observable<DrinksLookupDto> {
    return this.http.get<DrinksLookupDto>('https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=Alcoholic')
  }

  getCocktailList$(pageIndex: number, pageSize: number, withoutCache = false): Observable<DrinksLookupDto> {

    if (this.drinksCache && !withoutCache) return this.drinksCache.pipe(
      first(),
      map(dto => this.sliceMapPipe(dto, pageIndex, pageSize))
    )

    return this.http.get<DrinksLookupDto>('https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=Alcoholic').pipe(
      tap(dto => {
        this.drinksCache = new BehaviorSubject<DrinksLookupDto>(dto)
      }),
      map(dto => this.sliceMapPipe(dto, pageIndex, pageSize))
    )
  }

  getCocktail$(id: string, withoutCache = false): Observable<Drink> {

    if (!withoutCache && this.drinkInfoCache.has(id)) {
      return this.drinkInfoCache.get(id)!.pipe(
        map(dto => dto.drinks.map(drink => DrinkImportDtoToDrink(drink))[0])
      );
    }

    return this.http.get<DrinksCardDto>('https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=' + id).pipe(
      delay(1500),
      tap(dto => {
        this.drinkInfoCache.set(id, new BehaviorSubject(dto))
      }),
      map(dto => dto.drinks.map(drink => DrinkImportDtoToDrink(drink))[0])
    )
  }

  private sliceMapPipe = (dto: DrinksLookupDto, pageIndex: number, pageSize: number) => {
    let result = cloneDeep(dto)
    result.drinks = result.drinks.slice(pageIndex * pageSize, pageIndex * pageSize + pageSize)
    return result
  }


}