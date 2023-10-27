import { ChangeDetectionStrategy, ChangeDetectorRef, OnChanges } from '@angular/core';
import { AfterViewInit, Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import { Subject, delay, filter, map, of, pipe, switchMap, takeUntil, tap } from 'rxjs';
import { Drink } from 'src/app/Models/drink.model';
import { DrinkLookupDto, DrinksLookupDto } from 'src/app/Services/DTOs/drink-table.dto';
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
  pageLength: number = 0
  pageEvent: PageEvent = new PageEvent()
  pageSlice: any
  openCardId: string | null = null;

  drinkInfo: Drink | undefined | null

  currentCardInfo$ = new Subject<Drink | null>()

  isOpen: boolean = false

  cardState: { cardId: string, drink: Drink | null } | null = null;

  constructor(private readonly drinkService: DrinkService, private readonly cdr: ChangeDetectorRef) {
  }

  get drinkServiceInstance(): DrinkService {
    return this.drinkService;
  }

  ngOnInit(): void {
    this.drinkService.getCocktailList$(0, 100).pipe(this.getCockatildPipe).subscribe()
  }

  ngOnChanges() {

  }

  onCardChangeStatus(cardId: string, drink: string) {
    this.currentCardInfo$.next(null)


    if (!this.drinkInfo) {
      this.drinkService.getCocktail$(cardId).pipe(
        tap(dto => this.currentCardInfo$.next(dto))
      ).subscribe()
    }


    if (this.openCardId === cardId)
      this.openCardId = null
    else
      this.openCardId = cardId
  }

  OnPageChange(event: PageEvent) {

    this.drinkService.getCocktailList$(event.pageIndex, event.pageSize).pipe(
      tap(dto => this.drinks = dto.drinks),
    ).subscribe();




  }

  private readonly getCockatildPipe = pipe(
    tap((dto: DrinksLookupDto) => this.tableStatus = dto.drinks.length > 0 ? 'Loaded' : 'Empty'),
    tap((dto: DrinksLookupDto) => this.drinks = dto.drinks),
    tap((dto: DrinksLookupDto) => this.pageLength = dto.drinks.length)
  )

  /*   onTableReload() {
    this.tableStatus = 'NotLoaded'

    of(void 0).pipe(
      tap(() => this.tableStatus = 'NotLoaded'),
      switchMap(() => this.drinkService.getCocktailList$()),
      this.getCockatildPipe
    ).subscribe()
  } */
}
