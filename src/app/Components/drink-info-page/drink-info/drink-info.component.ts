import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { Drink } from 'src/app/Models/drink.model';

@Component({
  selector: 'kno-drink-info',
  templateUrl: './drink-info.component.html',
  styleUrls: ['./drink-info.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DrinkInfoComponent {
  @Input() info: Drink | null | undefined
}
