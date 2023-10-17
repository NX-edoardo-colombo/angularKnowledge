import { Component, OnInit } from '@angular/core';
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
    this.drinkService.getCocktailList$().subscribe(dto => this.drinks = dto.drinks)
  }

  onTableReload() {
    this.drinkService.getCocktailList$().subscribe(dto => this.drinks = dto.drinks)
  }
}
