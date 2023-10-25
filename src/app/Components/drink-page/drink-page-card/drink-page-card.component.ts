import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { of, switchMap, tap, pipe, delay } from 'rxjs';
import { DrinkService } from 'src/app/Services/drink.service';
import { DrinksCardDto } from 'src/app/Services/DTOs/drink-card.dto';
import { Drink } from 'src/app/Models/drink.model';

@Component({
  selector: 'kno-drink-page-card [id] [name] [imgSrc]',
  templateUrl: './drink-page-card.component.html',
  styleUrls: ['./drink-page-card.component.scss']
})
export class DrinkPageCardComponent /* implements OnInit */ {

  @Input() id!: string
  @Input() name!: string
  @Input() imgSrc!: string

  @Output() newCardOpened = new EventEmitter<string>();

  shouldShowInfo = false

  drinkInfo: string | undefined

  drinkIngredients: string[] | undefined

  drinkObj!: Drink;

  constructor(private readonly drinkService: DrinkService) {
  }

  onInfoClicked() {
    if (!this.drinkInfo)
      this.drinkService.getCocktail$(this.name).pipe(
        delay(1500),
        tap(dto => this.drinkObj = dto),
        tap(() => this.drinkInfo = this.drinkObj.instructions),
        tap(() => this.drinkIngredients = this.drinkObj.ingredients)
        ).subscribe()
        this.shouldShowInfo = true;
        
  }

  onBackClicked() {
    this.shouldShowInfo = false
  }

}
