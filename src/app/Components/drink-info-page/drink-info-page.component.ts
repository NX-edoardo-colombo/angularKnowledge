import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { DrinkInfoPageService } from './drink-info-page.service';
import { DrinksLookupDto } from 'src/app/Infrastructure/DTOs/drink-table.dto';
import { BehaviorSubject, tap } from 'rxjs';
import { Drink } from 'src/app/Models/drink.model';

@Component({
  selector: 'kno-drink-info-page',
  templateUrl: './drink-info-page.component.html',
  styleUrls: ['./drink-info-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DrinkInfoPageComponent implements OnInit {

  idDrink = '178325'

  drink: Drink | undefined

  constructor(private readonly drinkInfoPageService: DrinkInfoPageService) { }

  ngOnInit() {
    this.loadDrink$().subscribe();

  }

  private loadDrink$() {
    return this.drinkInfoPageService.getCocktailInfo$(this.idDrink).pipe(
      tap(dto => this.drink = dto),
    )
  }

}
