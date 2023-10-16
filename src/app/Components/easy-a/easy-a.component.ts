import { Component, Input } from '@angular/core';
import { EasyStateService } from '../easy/easy-state.service';

@Component({
  selector: 'kno-easy-a',
  templateUrl: './easy-a.component.html',
  styleUrls: ['./easy-a.component.scss']
})
export class EasyAComponent {
  constructor(private readonly easyStateService: EasyStateService) {
  }
}

