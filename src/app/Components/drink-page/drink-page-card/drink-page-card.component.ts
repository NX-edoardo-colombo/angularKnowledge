import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { DrinkService } from 'src/app/Services/drink.service';
import { DrinkLookupDto } from 'src/app/Services/DTOs/drink-table.dto';

@Component({
  selector: 'kno-drink-page-card',
  templateUrl: './drink-page-card.component.html',
  styleUrls: ['./drink-page-card.component.scss']
})
export class DrinkPageCardComponent /* implements OnInit */{
 
/*   @Input() drinks: DrinkLookupDto[] = []; */
  @Input() name: string | undefined
  @Input() id: string |undefined
  @Input() imgSrc: string | undefined

  instruction: string | undefined


  constructor(private readonly drinkService: DrinkService) {
  }

  /* @Output() showInstruction = new EventEmitter() */

  /* ngOnInit(): void  {
    console.log('imgSrc', this.imgSrc)
  } */

  /* onShowInstructionsButtonClick(){
    this.showInstruction.emit(this.name)
  } */

    onInfoClicked() {
      console.log('drink-page1', this.name);
     this.drinkService.getCocktailCard$(this.name!).subscribe(dto => this.instruction = dto.strInstructions)
     console.log('drink-page3', this.instruction);
  }
}
