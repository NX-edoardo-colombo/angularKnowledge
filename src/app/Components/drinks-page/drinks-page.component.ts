import { ChangeDetectionStrategy, ChangeDetectorRef, OnChanges } from '@angular/core';
import { AfterViewInit, Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import { BehaviorSubject, Observable, Subject, delay, filter, map, of, pipe, switchMap, takeUntil, tap } from 'rxjs';
import { Drink } from 'src/app/Models/drink.model';
import { DrinkLookupDto, DrinksLookupDto } from 'src/app/Infrastructure/DTOs/drink-table.dto';
import { DrinksPageService } from './drinks-page.service';
import { cardStatus } from './drinks-page-card/drinks-page-card.component';
import { Router } from '@angular/router';

@Component({
  selector: 'kno-drinks-page',
  templateUrl: './drinks-page.component.html',
  styleUrls: ['./drinks-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.Default
})
export class DrinksPageComponent implements OnInit, OnChanges {

  drinks: DrinkLookupDto[] | undefined
  tableStatus: 'NotLoaded' | 'Loaded' | 'Empty' = 'NotLoaded'

  currentPageSize: number = 10
  totalDrinksLenght: number = 0

  openCardId: string | null = null;

  currentCardInfo$ = new BehaviorSubject<Drink | null>(null)

  pageSizeOptions = [5, 10, 25, 50, 100]

  constructor(private readonly drinkPageService: DrinksPageService, private readonly cdr: ChangeDetectorRef, private router: Router) {
  }

  get drinkServiceInstance(): DrinksPageService {
    return this.drinkPageService;
  }

  get boardItem() {
    return 0
  }

  ngOnInit(): void {
    this.getBoardItems$(0, this.currentPageSize)
      .pipe(this.setBoardPipe)
      .subscribe();
  }

  ngOnChanges() {

  }

  onCardChangeStatus(cardId: string, status: cardStatus) {

    this.currentCardInfo$.next(null)

    if (status == 'default') this.openCardId = null
    else if (status == 'info') {
      this.openCardId = cardId

      this.drinkPageService.getCocktail$(cardId).pipe(
        tap(dto => this.currentCardInfo$.next(dto))
      ).subscribe()
    }

  }

  onViewDrinkPage(id: string) {
    if (id) {
      this.router.navigate(['drink', id]);
    }
  }

  OnPageChange(event: PageEvent) {
    this.currentPageSize = event.pageSize

    this.getBoardItems$(event.pageIndex, event.pageSize)
      .pipe(this.setBoardPipe)
      .subscribe()
  }


  private getBoardItems$(pageIndex: number, pageSize: number) {
    return this.drinkPageService.getCocktailList$(pageIndex, pageSize)
  }

  setBoardPipe = pipe(
    tap((response: [DrinksLookupDto, number]) => this.totalDrinksLenght = response[1]),
    map(response => response[0]),
    tap((dto: DrinksLookupDto) => this.tableStatus = dto.drinks.length > 0 ? 'Loaded' : 'Empty'),
    tap((dto: DrinksLookupDto) => this.drinks = dto.drinks)
  )
}
