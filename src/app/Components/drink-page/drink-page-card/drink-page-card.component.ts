import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { of, switchMap, tap, pipe } from 'rxjs';
import { DrinkService } from 'src/app/Services/drink.service';
import { DrinkCardDto } from 'src/app/Services/DTOs/drink-card.dto';

@Component({
  selector: 'kno-drink-page-card',
  templateUrl: './drink-page-card.component.html',
  styleUrls: ['./drink-page-card.component.scss']
})
export class DrinkPageCardComponent /* implements OnInit */{
 
  @Input() name: string | undefined
  @Input() id: string |undefined
  @Input() imgSrc: string | undefined

  instruction: string | undefined

  drinkCard: DrinkCardDto[] | undefined

  firstCard: boolean = true

  constructor(private readonly drinkService: DrinkService) {
  }

    onInfoClicked() {
      if(this.instruction ==undefined){
        this.drinkService.getCocktailCard$(this.name!).pipe(
          tap((dto : DrinkCardDto) => this.instruction = dto.drinks[0].strInstructions)
        ).subscribe() 
      }
      this.firstCard = false
    }

    onBackClicked() {
      this.firstCard = true
    }

}
