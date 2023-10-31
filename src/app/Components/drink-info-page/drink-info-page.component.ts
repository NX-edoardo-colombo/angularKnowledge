import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'kno-drink-info-page',
  templateUrl: './drink-info-page.component.html',
  styleUrls: ['./drink-info-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DrinkInfoPageComponent {

  idDrink = 3

}
