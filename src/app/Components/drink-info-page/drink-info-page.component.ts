import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { DrinkInfoPageService } from './drink-info-page.service';
import { DrinksLookupDto } from 'src/app/Infrastructure/DTOs/drink-table.dto';
import { BehaviorSubject, Observable, Subject, map, switchMap, tap } from 'rxjs';
import { Drink } from 'src/app/Models/drink.model';
import { ActivatedRoute, Params, Route, Router } from '@angular/router';

@Component({
  selector: 'kno-drink-info-page',
  templateUrl: './drink-info-page.component.html',
  styleUrls: ['./drink-info-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DrinkInfoPageComponent {

  info$ = new BehaviorSubject<Drink | null>(null)

  constructor(
    private readonly route: ActivatedRoute,
    private readonly drinkInfoPageService: DrinkInfoPageService,
    private router: Router
  ) {
    this.route.params.pipe(
      tap(() => this.info$.next(null)),
      tap(p => console.log('params', p)),
      map(p => p['id']),
      switchMap(id => this.getDrinkInfo$(id)),
      tap(info => this.info$.next(info))
    ).subscribe()
  }

  private getDrinkInfo$(id: string) {
    return this.drinkInfoPageService.getCocktailInfo$(id)
  }

  onGoHomePage() {
    this.router.navigate([''])
  }

}
