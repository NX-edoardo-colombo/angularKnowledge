import { ChangeDetectionStrategy, ChangeDetectorRef, Component, EventEmitter, Input, Output } from '@angular/core';
import { DrinkLookupDto, DrinksLookupDto } from 'src/app/Services/DTOs/drink-table.dto';

@Component({
  selector: 'kno-drink-page-table [drinks]',
  templateUrl: './drink-page-table.component.html',
  styleUrls: ['./drink-page-table.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DrinkPageTableComponent {
  @Input() drinks: DrinkLookupDto[] = [];

  @Output() reload = new EventEmitter()

  trackByFunction = (i: number, obj: DrinkLookupDto) => obj.idDrink;

  constructor(private readonly cdr: ChangeDetectorRef) { }

  onReloadButtonClick() {
    this.reload.emit()
  }


}
