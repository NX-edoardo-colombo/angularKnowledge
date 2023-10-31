import { ChangeDetectionStrategy, ChangeDetectorRef, OnChanges } from '@angular/core';
import { AfterViewInit, Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import { BehaviorSubject, Observable, Subject, delay, filter, map, of, pipe, switchMap, takeUntil, tap } from 'rxjs';
import { Drink } from 'src/app/Models/drink.model';
import { DrinkLookupDto, DrinksLookupDto } from 'src/app/Infrastructure/DTOs/drink-table.dto';
import { DrinkService } from 'src/app/Services/drink.service';
import { cardStatus } from './drink-page-card/drink-page-card.component';

@Component({
  selector: 'kno-drink-page',
  templateUrl: './drink-page.component.html',
  styleUrls: ['./drink-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.Default
})
export class DrinkPageComponent implements OnInit, OnChanges {

  drinks: DrinkLookupDto[] | undefined
  tableStatus: 'NotLoaded' | 'Loaded' | 'Empty' = 'NotLoaded'

  currentPageIndex: number = 0
  currentPageSize: number = 10
  totalDrinksLenght: number = 0

  openCardId: string | null = null;

  currentCardInfo$ = new BehaviorSubject<Drink | null>(null)

  pageSizeOptions = [5, 10, 25, 50, 100]

  constructor(private readonly drinkService: DrinkService, private readonly cdr: ChangeDetectorRef) {
  }

  get drinkServiceInstance(): DrinkService {
    return this.drinkService;
  }

  ngOnInit(): void {
    this.loadBoard$().subscribe();
  }

  ngOnChanges() {

  }

  onCardChangeStatus(cardId: string, status: cardStatus) {

    this.currentCardInfo$.next(null)

    if (status == 'default') this.openCardId = null
    else if (status == 'info') {
      this.openCardId = cardId

      this.drinkService.getCocktail$(cardId).pipe(
        tap(dto => this.currentCardInfo$.next(dto))
      ).subscribe()
    }

  }

  OnPageChange(event: PageEvent) {
    this.currentPageIndex = event.pageIndex
    this.currentPageSize = event.pageSize
    this.loadBoard$().subscribe();
  }


  private loadBoard$() {
    return this.drinkService.getCocktailList$(this.currentPageIndex, this.currentPageSize)
      .pipe(
        tap(response => this.totalDrinksLenght = response[1]),
        map(response => response[0]),
        tap((dto: DrinksLookupDto) => this.tableStatus = dto.drinks.length > 0 ? 'Loaded' : 'Empty'),
        tap((dto: DrinksLookupDto) => this.drinks = dto.drinks)
      )
  }
}
