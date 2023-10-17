import { Component, EventEmitter, Input, Output } from '@angular/core';
import { DrinkLookupDto, DrinksLookupDto } from 'src/app/Services/DTOs/drink-table.dto';

@Component({
  selector: 'kno-drink-page-table [drinks]',
  templateUrl: './drink-page-table.component.html',
  styleUrls: ['./drink-page-table.component.scss']
})
export class DrinkPageTableComponent {
  @Input() drinks: DrinkLookupDto[] = [];

  @Output() reload = new EventEmitter<MouseEvent>()

  onReloadButtonClick() {
    this.reload.emit()
  }


}
