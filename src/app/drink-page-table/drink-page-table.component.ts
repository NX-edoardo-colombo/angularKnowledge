import { Component, EventEmitter, Input, Output } from '@angular/core';
import { DrinkTableService } from '../Services/drink-table.service';
import { DrinksTableDto } from '../Services/DTOs/drink-table.dto';

@Component({
  selector: 'kno-drink-page-table',
  templateUrl: './drink-page-table.component.html',
  styleUrls: ['./drink-page-table.component.scss']
})
export class DrinkPageTableComponent {
  @Input() arrayDrinks: DrinksTableDto[] = [];

  @Output() newItemEvent = new EventEmitter<MouseEvent>

  showList() {
    this.newItemEvent.emit()
  }
}
