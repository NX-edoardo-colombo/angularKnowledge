import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subject, delay, filter, map, pipe, takeUntil, tap } from 'rxjs';
import { DrinkLookupDto, DrinksLookupDto } from 'src/app/Services/DTOs/drink-table.dto';
import { DrinkService } from 'src/app/Services/drink.service';

@Component({
  selector: 'kno-drink-page',
  templateUrl: './drink-page.component.html',
  styleUrls: ['./drink-page.component.scss']
})
export class DrinkPageComponent implements OnInit {

  drinks: DrinkLookupDto[]  | undefined

  tableStatus: 'NotLoaded' | 'Loaded' | 'Empty' = 'NotLoaded'


  constructor(private readonly drinkService: DrinkService) {
  }


  ngOnInit(): void {
    this.drinkService.getCocktailList$().pipe(this.getCockatildPipe).subscribe() 
  }

  onTableReload() {
    this.tableStatus = 'NotLoaded'
    this.drinkService.getCocktailList$().pipe(this.getCockatildPipe).subscribe()
  }

  private readonly getCockatildPipe = pipe(
  tap((dto: DrinksLookupDto) => {
    if (dto.drinks.length > 0) {

      this.tableStatus = 'Loaded'
      console.log('one ' + this.tableStatus)
    }else if (dto.drinks.length <= 0) {
      this.tableStatus = 'Empty'
    }

    this.drinks = dto.drinks
  }))
}
