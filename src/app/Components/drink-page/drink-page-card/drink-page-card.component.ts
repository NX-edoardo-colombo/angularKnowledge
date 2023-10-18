import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { of, switchMap, tap, pipe } from 'rxjs';
import { DrinkService } from 'src/app/Services/drink.service';
import { DrinkCardDto } from 'src/app/Services/DTOs/drink-card.dto';

@Component({
  selector: 'kno-drink-page-card [id] [name] [imgSrc]',
  templateUrl: './drink-page-card.component.html',
  styleUrls: ['./drink-page-card.component.scss']
})
export class DrinkPageCardComponent /* implements OnInit */ {

  @Input() id!: string
  @Input() name!: string
  @Input() imgSrc!: string

  shouldShowInfo = false

  drinkInfo: string | undefined

  constructor(private readonly drinkService: DrinkService) {
  }

  onInfoClicked() {
    if (!this.drinkInfo)
      this.drinkService.getCocktailCard$(this.name).pipe(
        tap(dto => this.drinkInfo = dto.drinks[0].strInstructions),
        tap(() => this.shouldShowInfo = false)
      ).subscribe()
  }

  onBackClicked() {
    this.shouldShowInfo = true
  }

}
