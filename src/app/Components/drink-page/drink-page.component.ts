import { Component, OnInit } from '@angular/core';
import { delay } from 'rxjs';
import { DrinkLookupDto } from 'src/app/Services/DTOs/drink-table.dto';
import { DrinkService } from 'src/app/Services/drink.service';

@Component({
  selector: 'kno-drink-page',
  templateUrl: './drink-page.component.html',
  styleUrls: ['./drink-page.component.scss']
})
export class DrinkPageComponent implements OnInit {

  drinks: DrinkLookupDto[] | undefined

  constructor(private readonly drinkService: DrinkService) {
  }

  ngOnInit(): void {
    this.drinkService.getCocktailList$().pipe(delay(3000)).subscribe(dto => this.drinks = dto.drinks)
  }

  onTableReload() {
    this.drinkService.getCocktailList$().pipe(delay(3000)).subscribe(dto => this.drinks = dto.drinks)
  }
}
