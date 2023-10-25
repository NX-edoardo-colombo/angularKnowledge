import { ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { AfterViewInit, Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import { Subject, delay, filter, map, of, pipe, switchMap, takeUntil, tap } from 'rxjs';
import { DrinkLookupDto, DrinksLookupDto } from 'src/app/Services/DTOs/drink-table.dto';
import { DrinkService } from 'src/app/Services/drink.service';

@Component({
  selector: 'kno-drink-page',
  templateUrl: './drink-page.component.html',
  styleUrls: ['./drink-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DrinkPageComponent implements OnInit {

  drinks: DrinkLookupDto[] | undefined
  tableStatus: 'NotLoaded' | 'Loaded' | 'Empty' = 'NotLoaded'
  pageLength: number = 0
  pageEvent: PageEvent = new PageEvent()
  pageSlice: any

  openCardId: string | null = null;

  constructor(private readonly drinkService: DrinkService, private readonly cdr: ChangeDetectorRef) {
  }

  ngOnInit(): void {
    this.drinkService.getCocktailList$().pipe(this.getCockatildPipe).subscribe(_ => this.cdr.markForCheck())
  }

  onCardClicked(cardId: string) {
    if (this.openCardId === cardId) {
      this.openCardId = null;   
    } else {
      this.openCardId = cardId;
    }
  }

  OnPageChange(event: PageEvent) {
    const startIndex = event.pageIndex * event.pageSize
    let endIndex = startIndex + event.pageSize
    if (endIndex > this.pageLength) {
      endIndex = this.pageLength
    }
    this.pageSlice = this.drinks?.slice(startIndex, endIndex)
  }

  private readonly getCockatildPipe = pipe(
    tap((dto: DrinksLookupDto) => this.tableStatus = dto.drinks.length > 0 ? 'Loaded' : 'Empty'),
    tap((dto: DrinksLookupDto) => this.drinks = dto.drinks),
    tap((dto: DrinksLookupDto) => this.pageLength = dto.drinks.length),
    tap(() => this.pageSlice = this.drinks?.slice(0, 10))
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
