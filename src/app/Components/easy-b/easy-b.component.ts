import { Component, Input } from '@angular/core';
import { EasyStateService } from '../easy/easy-state.service';

@Component({
  selector: 'kno-easy-b',
  templateUrl: './easy-b.component.html',
  styleUrls: ['./easy-b.component.scss']
})
export class EasyBComponent {
  constructor(public readonly easyStateService: EasyStateService) {

  }

}
